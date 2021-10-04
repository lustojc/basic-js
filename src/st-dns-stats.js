import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let obj = {};

  let splitDomain = (dom) => {
    let arr = dom.split(".");

    arr[arr.length - 1] = `.${arr[arr.length - 1]}`;
    arr.reverse();

    for (let i = 0; i < arr.length; i++) {
      let key = arr.slice(0, i + 1).join(".");

      if (Object.keys(obj).includes(key)) obj[key]++;
      else obj[key] = 1;
    }
  };

  domains.forEach((el) => {
    splitDomain(el);
  });

  return obj;
}
