const INPUT_PATH = "../inputs/밑줄.txt";
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [n, m] = inputArguments[0].split(" ").map(Number);
  const words = inputArguments.slice(1);
  const totalWordLength = words.reduce((sum, word) => sum + word.length, 0);
  const totalUnderscoresNeeded = m - totalWordLength;
  const baseUnderscores = Math.floor(totalUnderscoresNeeded / (n - 1));
  let remainingUnderscores = totalUnderscoresNeeded % (n - 1);
  let result = words[0];

  for (let i = 1; i < n; i++) {
    let underscoresToAdd = baseUnderscores;

    if (words[i][0].toLowerCase() === words[i][0] && remainingUnderscores > 0) {
      underscoresToAdd += 1;
      remainingUnderscores -= 1;
    } else if (i + remainingUnderscores === n) {
      underscoresToAdd += 1;
      remainingUnderscores -= 1;
    }

    result += "_".repeat(underscoresToAdd) + words[i];
  }

  return result;
}

console.log(solution(input));
