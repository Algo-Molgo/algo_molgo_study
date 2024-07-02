const INPUT_PATH = "./inputs/창고_다각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [N, ...list] = inputArguments;
  const polygonList = list.map(e => e.split(" ").map(Number)).sort((a, b) => a[0] - b[0])
  const polygonObject = {};

  for (const [x, y] of polygonList) {
    polygonObject[x] = Number(y);
  }

  const [minX, minY] = polygonList[0];
  const [maxX, maxY] = polygonList[polygonList.length - 1];

  let minHeight = minY;
  let area = 0;

  for (let i = minX; i < maxX; i++) {
    if (polygonObject[i]) {
      if (minHeight < polygonObject[i]) {
        minHeight = polygonObject[i];
      }
    }
    
    area += minHeight;
  }

  return area;
}

console.log(solution(input));
