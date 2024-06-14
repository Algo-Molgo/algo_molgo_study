const INPUT_PATH = "../inputs/숫자정사각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
let [information, ...map] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
map = map.map((value) => value.split(""));
console.log(map);

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

  const right = map[startY][startX];
  const down = map[startY][startX];
  const cross = map[startY][startX];

  if (right === down && down === cross) {
    max = count;
  }

  count++;

  return findSquare(map, startX + count, startY + count, count, max);
}
