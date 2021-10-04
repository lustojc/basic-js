import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function countChars(string) {
  return string
    .split("")
    .reduce((obj, char) => ({ ...obj, [char]: (obj[char] || 0) + 1 }), {});
}

export default function getCommonCharacterCount(s1, s2) {
  const countS1 = countChars(s1);
  const countS2 = countChars(s2);

  return Object.keys(countS1).reduce(
    (acc, char) =>
      acc +
      (countS1[char] < countS2[char] ? countS1[char] : countS2[char] || 0),
    0
  );
}
