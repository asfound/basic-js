const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const board = Array.from({ length: rows }, () => Array(columns).fill(0));

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      if (matrix[row][column] === true) {
        for (let rowStep = -1; rowStep <= 1; rowStep += 1) {
          for (let columnStep = -1; columnStep <= 1; columnStep += 1) {
            const isColumnValid =
              column + columnStep >= 0 && column + columnStep < columns;
            const isRowValid = row + rowStep >= 0 && row + rowStep < rows;

            if (isColumnValid && isRowValid) {
              if (rowStep !== 0 || columnStep !== 0) {
                board[row + rowStep][column + columnStep] += 1;
              }
            }
          }
        }
      }
    }
  }

  return board;
}

module.exports = {
  minesweeper,
};
