import { NotImplementedError } from "../extensions/index.js";

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an arr of names that will be given to the files.
 *
 * @param {arr} names
 * @return {arr}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let arr = [];
  let j;
  for (j = 0; j < names.length; j++) {
    if (!arr.includes(names[j])) {
      arr.push(names[j]);
    } else {
      if (!arr.includes(names[j] + "(1)")) arr.push(names[j] + "(1)");
      else arr.push(names[j] + "(2)");
    }
  }
  return arr;
}
