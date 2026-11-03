export function merge(
  col_1: number[],
  col_2: number[],
  col_3: number[]
): number[] {
  const result: number[] = [];
  let i = 0;
  let j = col_2.length - 1;
  let k = 0;

  while (i < col_1.length || j >= 0 || k < col_3.length ) {
    const a = i < col_1.length ? col_1[i] : Infinity;
    const b = j >= 0 ? col_2[j] : Infinity;
    const c = k < col_3.length ? col_3[k] : Infinity;
    if (a <= b && a <= c) {
      result.push(a);
      i++;
    } else if (b <= c) {
      result.push(b);
      j--;
    } else {
      result.push(c);
      k++;
    }
  }
  return result;
}
