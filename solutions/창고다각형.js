const INPUT_PATH = "../inputs/창고다각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  let area = 0;
  const pillars = inputArguments
    .slice(1)
    .map((pillar) => pillar.split(" ").map(Number));
  const heightOfHighestPillar = pillars.sort((a, b) => b[1] - a[1])[0][1];
  const highestPillars = [];
  const sortedPillars = pillars.sort((a, b) => a[0] - b[0]);
  let prevPillar = sortedPillars[0];

  pillars.forEach((pillar) => {
    if (pillar[1] === heightOfHighestPillar) {
      highestPillars.push(pillar);
    }
  });
  highestPillars.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < sortedPillars.length; i += 1) {
    if (prevPillar[1] < sortedPillars[i][1]) {
      area += prevPillar[1] * (sortedPillars[i][0] - prevPillar[0]);
      prevPillar = sortedPillars[i];
    }

    if (sortedPillars[i][0] === highestPillars[0][0]) {
      break;
    }
  }

  prevPillar = sortedPillars[sortedPillars.length - 1];

  for (let i = sortedPillars.length - 2; i >= 0; i -= 1) {
    if (prevPillar[1] < sortedPillars[i][1]) {
      area += prevPillar[1] * (prevPillar[0] - sortedPillars[i][0]);
      prevPillar = sortedPillars[i];
    }

    if (sortedPillars[i][0] === highestPillars[highestPillars.length - 1][0]) {
      break;
    }
  }

  area +=
    highestPillars.length > 1
      ? (highestPillars[highestPillars.length - 1][0] -
          highestPillars[0][0] +
          1) *
        highestPillars[0][1]
      : highestPillars[0][1];

  return area;
}

console.log(solution(input));
