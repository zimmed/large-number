import { LargeNumber } from './types';

/**
 * Get the approximate value of the `LargeNumber` as a `number`.
 *
 * _Note: Approximation is only as precise as allowed by floating-point precision._
 */
export default function toValue(ln: LargeNumber): number {
  const whole = ln.wholeBuckets.reduce((t, b, i) => t + b * Math.pow(1000, i), 0);
  const d = ln.fractionBuckets.reduce((t, b, i) => t + b / Math.pow(1000, i + 1), 0);

  return (ln.negative ? -1 : 1) * (whole + d);
}
