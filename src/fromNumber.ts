import { LargeNumber } from './types';
import create from './create';
import trim from './trim';

/**
 * Creates a new `LargeNumber` from a `number` value, starting at the specified bucket (power of 1000).
 *
 * _Note: Can only maintain accuracy as far as floating point precision allows. If large number accuracy
 * is needed, use `fromString`._
 */
export default function fromNumber(num: number, bucketUnits = 0): LargeNumber {
  const negative = num < 0;
  let [whole, dec] = Math.abs(num).toLocaleString('en-us', { maximumFractionDigits: 16 }).replace(/,/g, '').split('.');
  const fractionBuckets = [];
  const wholeBuckets = [];
  let currentBucket = bucketUnits;

  while (dec) {
    whole += dec.slice(0, 3).padEnd(3, '0');
    dec = dec.slice(3);
    currentBucket -= 1;
  }

  whole = whole.padStart(Math.ceil(whole.length / 3) * 3, '0');

  while (currentBucket < 0) {
    fractionBuckets[Math.abs(currentBucket) - 1] = whole ? Number(whole.slice(-3).padEnd(3, '0')) : 0;
    whole = whole.slice(0, -3);
    currentBucket += 1;
  }

  for (let i = 0; i < currentBucket; i++) wholeBuckets.push(0);

  while (whole) {
    wholeBuckets.push(Number(whole.slice(-3).padStart(3, '0')));
    whole = whole.slice(0, -3);
  }

  return trim(create({ negative, wholeBuckets, fractionBuckets }));
}
