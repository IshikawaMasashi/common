/**
 * Returns the last element of an array.
 * @param array The array.
 * @param n Which element from the end (default is zero).
 */
export function tail<T>(array: ArrayLike<T>, n = 0): T {
  return array[array.length - (1 + n)];
}

export function tail2<T>(arr: T[]): [T[], T] {
  if (arr.length === 0) {
    throw new Error('Invalid tail call');
  }

  return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
}

export function equals<T>(
  one: ReadonlyArray<T> | undefined,
  other: ReadonlyArray<T> | undefined,
  itemEquals: (a: T, b: T) => boolean = (a, b) => a === b
): boolean {
  if (one === other) {
    return true;
  }

  if (!one || !other) {
    return false;
  }

  if (one.length !== other.length) {
    return false;
  }

  for (let i = 0, len = one.length; i < len; i++) {
    if (!itemEquals(one[i], other[i])) {
      return false;
    }
  }

  return true;
}

export function binarySearch<T>(
  array: ReadonlyArray<T>,
  key: T,
  comparator: (op1: T, op2: T) => number
): number {
  let low = 0,
    high = array.length - 1;

  while (low <= high) {
    const mid = ((low + high) / 2) | 0;
    const comp = comparator(array[mid], key);
    if (comp < 0) {
      low = mid + 1;
    } else if (comp > 0) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -(low + 1);
}
