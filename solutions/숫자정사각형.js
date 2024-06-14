const INPUT_PATH = "../inputs/숫자정사각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
let [information, ...map] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
map = map.map((value) => value.split(""));

const [height, width] = information.split(" ").map(Number);
let max = 0;

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    max = Math.max(max, findSquare(map, i, j, 0, 1) ** 2);
  }
}

console.log(max);

function findSquare(map, startX, startY, count, max) {
  const isOut = startX + count >= width || startY + count >= height;

  if (isOut) {
    return max;
  }

  const right = map[startY][startX + count];
  const down = map[startY + count][startX];
  const cross = map[startY + count][startX + count];

  if (right === down && down === cross) {
    max = count;
  }

  count++;

  return findSquare(map, startX, startY, count, max);
}
