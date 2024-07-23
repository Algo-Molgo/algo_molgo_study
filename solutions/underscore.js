const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const words = input.slice(1);

  const wordsLength = words.reduce((sum, word) => sum + word.length, 0);
  const totalUnderScores = M - wordsLength;

  let baseUnderScores = Math.floor(totalUnderScores / (N - 1));
  let extraUnderScores = totalUnderScores % (N - 1);

  const result = [];

  for (let i = 0; i < N - 1; i++) {
    result.push(words[i]);
    result.push("_".repeat(baseUnderScores));

    if (extraUnderScores > 0) {
      result.push("_");
      extraUnderScores--;
    }
  }

  result.push(words[N - 1]);

  return result.join("");
}

console.log(solution(input));
