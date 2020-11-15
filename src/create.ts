import { LargeNumber } from './types';

export const DEFAULT: LargeNumber = { wholeBuckets: [], fractionBuckets: [], negative: false };

/**
 * Create a new `LargeNumber`.
 */
export default function create({
  negative = DEFAULT.negative,
  wholeBuckets = DEFAULT.wholeBuckets,
  fractionBuckets = DEFAULT.fractionBuckets,
}: Partial<LargeNumber> = {}): LargeNumber {
  return {
    negative,
    wholeBuckets: wholeBuckets.slice(0),
    fractionBuckets: fractionBuckets.slice(0),
  };
}
