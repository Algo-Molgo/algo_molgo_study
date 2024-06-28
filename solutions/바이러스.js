const INPUT_PATH = "../inputs/바이러스.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../inputs/회의실배정.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const totalComputers = parseInt(input[0], 10);
  const totalConnections = parseInt(input[1], 10);
  const graph = Array.from(Array(totalComputers + 1), () => []);
  const visited = Array(numComputers + 1).fill(false);
}

solution(input);
