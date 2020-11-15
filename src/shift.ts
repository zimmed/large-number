import { LargeNumber } from './types';
import { getDecimal } from './internals';

/**
 * Shift the `LargeNumber` by the specified power of 10.
 *
 * *Mutates argument*
 *
 * _Works like a bitshift operation, but base10 instead of base2._
 */
export default function shift(ln: LargeNumber, cols = 3): LargeNumber {
  const bucketShift = Math.trunc(cols / 3);
  const colShift = cols % 3;
  const factor = colShift && Math.pow(10, Math.abs(colShift));
  let additional;
  let v;

  if (colShift > 0) {
    additional = ln.wholeBuckets.reduce(
      (add, n, i) => {
        v = n * factor + add;
        ln.wholeBuckets[i] = v % 1000;
        return Math.trunc(v / 1000);
      },
      ln.fractionBuckets.reduceRight((add, n, i) => {
        v = n * factor + add;
        ln.fractionBuckets[i] = v % 1000;
        return Math.trunc(v / 1000);
      }, 0)
    );
    while (additional) {
      ln.wholeBuckets.push(additional % 1000);
      additional = Math.trunc(additional / 1000);
    }
  } else if (colShift < 0) {
    additional = ln.fractionBuckets.reduce(
      (add, n, i) => {
        v = n / factor + add;
        ln.fractionBuckets[i] = Math.trunc(v);
        return Math.trunc(getDecimal(v) * 1000);
      },
      ln.wholeBuckets.reduceRight((add, n, i) => {
        v = n / factor + add;
        ln.wholeBuckets[i] = Math.trunc(v);
        return Math.trunc(getDecimal(v) * 1000);
      }, 0)
    );
    while (additional) {
      ln.fractionBuckets.push(Math.trunc(additional));
      additional = Math.trunc(getDecimal(additional) * 1000);
    }
  }

  if (bucketShift > 0) {
    additional = ln.fractionBuckets.splice(0, bucketShift);
    if (additional.length < bucketShift) {
      additional = additional.concat(Array(bucketShift - additional.length).fill(0));
    }
    ln.wholeBuckets = additional.reverse().concat(ln.wholeBuckets);
  } else if (bucketShift < 0) {
    additional = ln.wholeBuckets.splice(0, -bucketShift);
    if (additional.length < -bucketShift) {
      additional = additional.concat(Array(-bucketShift - additional.length).fill(0));
    }
    ln.fractionBuckets = additional.reverse().concat(ln.fractionBuckets);
  }

  return ln;
}
