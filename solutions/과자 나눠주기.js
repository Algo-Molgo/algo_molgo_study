const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "../inputs/inputBoilerPlate.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [numNephews] = inputArguments[0].split(" ").map(Number);
  const snackLengths = inputArguments[1].split(" ").map(Number);

  const maxLength = Math.max(...snackLengths);
  let result = 0;

  for (let length = 0; length <= maxLength; length++) {
    let count = 0;

    for (const snack of snackLengths) {
      count += Math.floor(snack / length);
    }

    if (count >= numNephews) {
      result = length;
    }
  }

  return result;
}

console.log(solution(input));
