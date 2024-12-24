const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const uniqueNames = new Set();
  const result = [];

  for (const name of names) {
    if (uniqueNames.has(name)) {
      let uniqueName = name;
      let counter = 0;

      while (uniqueNames.has(uniqueName)) {
        uniqueName = `${name}(${counter + 1})`;
        counter += 1;
      }
      result.push(uniqueName);
      uniqueNames.add(uniqueName);
    } else {
      result.push(name);
      uniqueNames.add(name);
    }
  }
  return result;
}

module.exports = {
  renameFiles,
};
