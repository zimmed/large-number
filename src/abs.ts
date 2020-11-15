import { LargeNumber } from './types';
import create from './create';

/**
 * Get the absolute `LargeNumber` value of the provided `LargeNumber`.
 */
export default function abs(ln: LargeNumber): LargeNumber {
  return create({ ...ln, negative: false });
}
