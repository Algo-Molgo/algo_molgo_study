const INPUT_PATH = "../inputs/안전영역.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const elevationMap = input
    .slice(1)
    .map((line) => line.split(" ").map(Number));

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const exploreRegion = (x, y, visited, currentWaterLevel) => {
    visited[x][y] = true;

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (
        newX >= 0 &&
        newX < N &&
        newY >= 0 &&
        newY < N &&
        !visited[newX][newY] &&
        elevationMap[newX][newY] > currentWaterLevel
      ) {
        exploreRegion(newX, newY, visited, currentWaterLevel);
      }
    }
  };

  let maxSafeRegionCount = 0;
  let highestElevation = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (elevationMap[i][j] > highestElevation) {
        highestElevation = elevationMap[i][j];
      }
    }
  }

  for (let waterLevel = 0; waterLevel <= highestElevation; waterLevel++) {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    let safeRegionCount = 0;

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        if (!visited[row][col] && elevationMap[row][col] > waterLevel) {
          exploreRegion(row, col, visited, waterLevel);
          safeRegionCount++;
        }
      }
    }

    maxSafeRegionCount = Math.max(maxSafeRegionCount, safeRegionCount);
  }

  return maxSafeRegionCount;
}

console.log(solution(input));
