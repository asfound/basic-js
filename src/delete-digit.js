const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit(n) {
  const digits = n.toString();

  for (let i = 0; i <= digits.length; i += 1) {
    if (digits[i] < digits[i + 1]) {
      return parseInt(digits.slice(0, i) + digits.slice(i + 1));
    }
  }
  return parseInt(digits.slice(0, -1));
}

module.exports = {
  deleteDigit,
};
