//INPUT_PATH에 오늘 문제에 해당하는 input파일경로를 적어주세요
const INPUT_PATH = "../inputs/숫자 정사각형..txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const matrix = input.slice(1).map((row) => row.split("").map(Number));
  let max = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (let plus = 1; i + plus < N; plus++) {
        if (j + plus >= M) {
          break;
        }

        if (
          matrix[i][j] === matrix[i + plus][j] &&
          matrix[i + plus][j] === matrix[i][j + plus] &&
          matrix[i + plus][j + plus] === matrix[i][j]
        ) {
          max = Math.max(max, plus + 1);
        }
      }
    }
  }

  return max ** 2;
}

// 백준은 return이 아닌 console.log로 결과값을 판단합니다.
// console.log를 활용하여 log로 정답이 출력 되게끔 로직을 작성해 주세요.
console.log(solution(input));
