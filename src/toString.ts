import { LargeNumber } from './types';

/**
 * Get the string representation of the `LargeNumber`.
 *
 * @param bucketSeparator string to separate integers by powers of 1000
 * @param decimalSeparator string to separate integer value from decimal value
 */
export default function toString(ln: LargeNumber, bucketSeparator = '', decimalSeparator = '.'): string {
  const sign = ln.negative ? '-' : '';
  const whole = ln.wholeBuckets
    .map((n, i) => (i + 1 < ln.wholeBuckets.length ? String(n).padStart(3, '0') : String(n)))
    .reduceRight((n: string[], e) => n.concat(e), [])
    .join(bucketSeparator);
  const [, dec = ''] =
    ln.fractionBuckets
      .map((n) => String(n).padStart(3, '0'))
      .join('')
      .match(/^(\d*[1-9])0*$/) || [];

  return `${sign}${whole}${dec ? `${decimalSeparator}${dec}` : ''}`;
}
