import { describe, it, expect } from "vitest";
import { merge } from "../src/merge";

describe("merge", () => {
  it("should merge three arrays in ascending order", () => {
    const result = merge([1, 3, 5], [6, 4, 2], [0, 7, 8]);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should work with empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
  });

  it("should handle duplicate numbers", () => {
    const result = merge([1, 2], [3, 2], [2, 4]);
    expect(result).toEqual([1, 2, 2, 2, 3, 4]);
  });

  it("should work with negative numbers", () => {
    const result = merge([-5, -1], [2, -2], [0, 3]);
    expect(result).toEqual([-5, -2, -1, 0, 2, 3]);
  });
});
