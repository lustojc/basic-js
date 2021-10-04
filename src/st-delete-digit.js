import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let array = n.toString().split("");
  if (array.length < 2) {
    return null;
  }
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      delete array[i];
      return Number(array.join(""));
    }
  }
  array.pop();
  return Number(array.join(""));
}
