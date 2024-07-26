const INPUT_PATH = "../inputs/밑줄.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const firstLine = input[0].split(" ");
const N = parseInt(firstLine[0]);
const M = parseInt(firstLine[1]);
const words = input.slice(1, N + 1);

function createNewWord(words, M) {
  const wordLength = words.reduce((acc, word) => acc + word.length, 0);
  const difference = words.length - 1;
  let underscoreCounts = M - wordLength;
  let minUnderscores = Math.floor(underscoreCounts / difference);
  let extraUnderscores = underscoreCounts % difference;
  let result = words[0];

  for (let i = 1; i < words.length; i++) {
    let currentDifference = minUnderscores + (extraUnderscores > 0 ? 1 : 0);
    result += "_".repeat(currentDifference) + words[i];

    if (extraUnderscores > 0) {
      extraUnderscores--;
    }
  }

  return result;
}

console.log(createNewWord(words, M));
