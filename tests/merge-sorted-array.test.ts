import { describe, test, expect } from "bun:test";
import mergeSortedArray from "../src/merge-sorted-array";

describe("merge sorted arrays", () => {
  test("two full arrays", () => {
    let nums1 = [1, 2, 6, 0, 0, 0];
    let nums2 = [2, 4, 9];
    let m = 3;
    let n = 3;
    let result = [1, 2, 2, 4, 6, 9];
    expect(mergeSortedArray(nums1, nums2, m, n)).toEqual(result);
  });
  test("one empty array", () => {
    expect(mergeSortedArray([0, 0, 0], [2, 4, 9], 0, 3)).toEqual([2, 4, 9]);
  });
  test("second empty array", () => {
    expect(mergeSortedArray([1, 3, 5], [], 3, 0)).toEqual([1, 3, 5]);
  });
  test("two empty arrays", () => {
    expect(mergeSortedArray([], [], 0, 0)).toEqual([]);
  });
});
