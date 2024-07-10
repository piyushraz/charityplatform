export function offsetArrayItems(arr: any[], offset: number): any[] {
  const length = arr.length;
  if (length === 0) {
    return arr;
  }

  offset = offset % length; // Handle cases where offset is larger than array length
  if (offset < 0) {
    offset += length; // Convert negative offset to positive
  }

  return [...arr.slice(offset), ...arr.slice(0, offset)];
}

export function filterByNthElement<T>(arr: T[], n: number, offset = 0) {
  return arr.filter((_, i) => (i - offset) % n === 0);
}
