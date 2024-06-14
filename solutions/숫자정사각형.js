const INPUT_PATH = "../inputs/숫자정사각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((row) => row.split("").map(Number));

function solution(N, M, arr) {
  const maxLen = N < M ? N : M;
  let len = maxLen;

  while (len >= 0) {
    for (let i = 0; i + len < N; i++) {
      for (let j = 0; j + len < M; j++) {
        const isSameCorner =
          arr[i][j] === arr[i + len][j] &&
          arr[i][j + len] === arr[i + len][j + len] &&
          arr[i][j] === arr[i + len][j + len];

        if (isSameCorner) {
          return (len + 1) ** 2;
        }
      }
    }

    len--;
  }
}

console.log(solution(N, M, arr));
