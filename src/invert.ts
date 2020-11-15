import { LargeNumber } from './types';
import create from './create';

/**
 * Gets the `LargeNumber` with the opposite polarity (inverts negative sign).
 */
export default function invert(ln: LargeNumber): LargeNumber {
  return create({ ...ln, negative: !ln.negative });
}
