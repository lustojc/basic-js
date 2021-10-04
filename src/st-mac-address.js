import { NotImplementedError } from "../extensions/index.js";

/**
 * The MAC-48 addresults is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 addresults or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Addresults(n) {
  const arr = n.split("-");
  let result = true;
  if (arr.length !== 6) {
    result = false;
  }
  arr.forEach((el) => {
    let a = parseInt(el, 16);
    if (isNaN(a)) {
      result = false;
    }
  });
  return result;
}
