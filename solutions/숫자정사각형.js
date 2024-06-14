const INPUT_PATH = "../inputs/숫자정사각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
let [information, ...map] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
map = map.map((value) => value.split(""));

const [column, row] = information.split(" ").map(Number);
let max = 0;

for (let i = 0; i < column; i++) {
  for (let j = 0; j < row; j++) {
    max = Math.max(max, findSquare(map, i, j, 0, 1) ** 2);
  }
}

console.log(max);

function findSquare(map, startColumn, startRow, count, max) {
  const nextColumn = startColumn + count;
  const nextRow = startRow + count;
  const isOut = nextColumn >= column || nextRow >= row;

  if (isOut) {
    return max;
  }

  const current = map[startColumn][startRow];
  const right = map[startColumn][nextRow];
  const down = map[nextColumn][startRow];
  const cross = map[nextColumn][nextRow];

  if (right === down && down === cross && right === current) {
    max = Math.max(max, count + 1);
  }

  count++;

  return findSquare(map, startColumn, startRow, count, max);
}
