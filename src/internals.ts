import { LargeNumber } from './types';

/** @internal */
export function increment(ln: LargeNumber, num = 1): LargeNumber {
  let i = 0;
  let v = num;
  let i0;

  while (getDecimal(v)) {
    i -= 1;
    v *= 1000;
  }
  while (v % 1000 === 0) {
    i += 1;
    v /= 1000;
  }
  while (i < 0) {
    i0 = Math.abs(i) - 1;
    ln.fractionBuckets[i0] = (ln.fractionBuckets[i0] || 0) + (v % 1000);
    v = Math.trunc(v / 1000);
    i += 1;
  }
  while (v) {
    ln.wholeBuckets[i] = (ln.wholeBuckets[i] || 0) + (v % 1000);
    v = Math.trunc(v / 1000);
    i += 1;
  }

  return ln;
}

/** @internal */
export function decrement(ln: LargeNumber, num = 1): LargeNumber {
  let i = 0;
  let v = num;
  let i0;

  while (getDecimal(v)) {
    i -= 1;
    v *= 1000;
  }
  while (v % 1000 === 0) {
    i += 1;
    v /= 1000;
  }
  while (i < 0) {
    i0 = Math.abs(i) - 1;
    ln.fractionBuckets[i0] = (ln.fractionBuckets[i0] || 0) - (v % 1000);
    v = Math.trunc(v / 1000);
    if (ln.fractionBuckets[i0] < 0) {
      v += 1;
      ln.fractionBuckets[i0] += 1000;
    }
    i += 1;
  }
  while (v) {
    ln.wholeBuckets[i] = (ln.wholeBuckets[i] || 0) - (v % 1000);
    v = Math.trunc(v / 1000);
    if (ln.wholeBuckets[i] < 0) {
      v += 1;
      ln.wholeBuckets[i] += 1000;
    }
    i += 1;
  }

  return ln;
}

/** @internal */
export function diff(ln1: LargeNumber, ln2: LargeNumber, out: LargeNumber): LargeNumber {
  let v;
  let flip = false;
  let nextBorrow;
  let borrowed = ln2.wholeBuckets.reduce(
    (borrow, n, i) => {
      v = (ln1.wholeBuckets[i] || 0) - n - borrow;
      nextBorrow = v < 0 && ln1.wholeBuckets.length > i + 1 ? 1 : 0;
      if (nextBorrow) v += 1000;
      else if (v < 0) flip = true;
      out.wholeBuckets[i] = Math.abs(v);
      return nextBorrow;
    },
    ln2.fractionBuckets.reduceRight((borrow, n, i) => {
      v = (ln1.fractionBuckets[i] || 0) - n - borrow;
      nextBorrow = v < 0 ? 1 : 0;
      if (nextBorrow) v += 1000;
      out.fractionBuckets[i] = v;
      return nextBorrow;
    }, 0)
  );

  for (let i = ln2.wholeBuckets.length; i < ln1.wholeBuckets.length && borrowed; i++) {
    v = (ln1.wholeBuckets[i] || 0) - borrowed;
    borrowed = v < 0 && ln1.wholeBuckets.length > i + 1 ? 1 : 0;
    if (borrowed) v += 1000;
    else if (v < 0) flip = true;
    out.wholeBuckets[i] = v;
  }

  if (borrowed) {
    out.wholeBuckets[out.wholeBuckets.length] = borrowed;
  }

  if (flip) out.negative = !out.negative;

  return out;
}

/** @internal */
export function sum(ln1: LargeNumber, ln2: LargeNumber, out: LargeNumber): LargeNumber {
  let v;
  let remainder = ln2.wholeBuckets.reduce(
    (rest, n, i) => {
      v = (ln1.wholeBuckets[i] || 0) + n + rest;
      out.wholeBuckets[i] = v % 1000;
      return Math.trunc(v / 1000);
    },
    ln2.fractionBuckets.reduceRight((rest, n, i) => {
      v = (ln1.fractionBuckets[i] || 0) + n + rest;
      out.fractionBuckets[i] = v % 1000;
      return Math.trunc(v / 1000);
    }, 0)
  );

  for (let i = ln2.wholeBuckets.length; remainder > 0; i++) {
    out.wholeBuckets[i] = (ln1.wholeBuckets[i] || 0) + (remainder % 1000);
    remainder = Math.trunc(remainder / 1000);
  }

  return out;
}

/** @internal */
export function getDecimalStr(n: number): string {
  return n.toLocaleString('en-us', { maximumFractionDigits: 16 }).split('.')[1];
}

/** @internal */
export function getDecimal(n: number): number {
  const str = getDecimalStr(n);

  return str ? Number(`0.${str}`) : 0;
}
