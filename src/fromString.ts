import { LargeNumber } from './types';
import create from './create';
import shift from './shift';

/**
 * Creates a new large number from a number string (cannot have thousand-separators).
 *
 * @usage
 * ```typescript
 * import { fromString } from 'large-number';
 *
 * let num = fromString('-1e25');
 * num = fromString('.0000000000000000000000000000000000000000000000001');
 * num = fromString('-425283.141526539');
 * ```
 */
export default function fromString(str: string): LargeNumber {
  const [, neg, whole, d, pow] = str.match(/^(\-)?0*(\d*)(?:\.|\,)?(\d*[1-9])?0*(?:\e\+(-?\d+)|$)/i) || [];
  const fractionBuckets = d?.match(/\d{1,3}/g)?.map((n) => Number(n.padEnd(3, '0'))) || [];
  const wholeBuckets = whole
    ? whole
        .padStart(Math.ceil(whole.length / 3) * 3, '0')
        .match(/\d{1,3}/g)
        ?.map(Number)
        .reverse() || []
    : [];
  const ln = create({ negative: !!neg, fractionBuckets, wholeBuckets });

  return pow ? shift(ln, Number(pow)) : ln;
}
