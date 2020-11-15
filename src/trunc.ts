import { LargeNumber } from './types';
import trim from './trim';

/**
 * Truncates `LargeNumber` at specified bucket unit (power of 1000).
 *
 * *Mutates argument*
 */
export default function trunc(ln: LargeNumber, bucketUnits = 0): LargeNumber {
  if (bucketUnits < 0) {
    ln.fractionBuckets = ln.fractionBuckets.slice(0, Math.abs(bucketUnits));
  } else if (bucketUnits > 0) {
    ln.wholeBuckets = Array(bucketUnits).fill(0).concat(ln.wholeBuckets.slice(bucketUnits));
  } else {
    ln.fractionBuckets = [];
  }

  return trim(ln);
}
