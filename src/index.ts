import { merge } from "./merge.js";

const col_1 = [1, 3, 5];
const col_2 = [6, 4, 2];
const col_3 = [0, 7, 8];

const result = merge(
  col_1,
  col_2,
  col_3
);

console.log(result);
