const INPUT_PATH = "../inputs/밑줄.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [N, M] = inputArguments[0].split(" ").map(Number);
  const words = inputArguments.slice(1);
  let length = 0;
  let answer = words[0];

  words.forEach((word) => {
    length += word.length;
  });

  const gapLength = Math.floor((M - length) / (N - 1));
  const gaps = Array(N - 1).fill(gapLength);
  let rest = (M - length) % (N - 1);

  for (let i = 1; i < N; i++) {
    if (rest <= 0) {
      break;
    }

    const word = words[i];

    if (word.charCodeAt(0) >= 97 && rest > 0) {
      rest -= 1;
      gaps[i - 1] += 1;
    }
  }

  for (let pointer = N - 2; pointer >= 0; pointer -= 1) {
    if (rest <= 0) {
      break;
    }

    if (gaps[pointer] === gapLength) {
      gaps[pointer] += 1;
      rest -= 1;
    }
  }

  for (let i = 1; i < N; i++) {
    answer += "_".repeat(gaps[i - 1]);
    answer += words[i];
  }

  return answer;
}

console.log(solution(input));
