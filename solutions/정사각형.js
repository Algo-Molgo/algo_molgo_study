const INPUT_PATH = "../inputs/정사각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.splice(0, 1)[0].split(" ");

function solution(input) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
    }
  }
}

solution(input);
