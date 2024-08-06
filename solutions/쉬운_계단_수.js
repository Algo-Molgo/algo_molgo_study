const INPUT_PATH = "./inputs/쉬운_계단_수.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const length = inputArguments[0];
  const resultList = [];
  const stairNumberMap = {}
  let count = 0;
  const limitNumber = "9".repeat(length);
  let startNumber = "1" + "0".repeat(length - 1);

  const searchNumber = (numberString) => {
    const stringList = numberString.split("");

    for (let i = 0; i < length; i++ ) {
      const targetNumber = stringList[i];

      if (i > 0 && i < length) {
        const nextString = stringList[i + 1];
        const nextNumber = Number(targetNumber + 1);
        const difference = nextNumber - Number(targetNumber);
        
        if (difference <= 2 && !stairNumberMap[targetNumber + 1]) {
          count++
          
          resultList.push(targetNumber + 1);
        }
      }
    }
  }

  while (startNumber < limitNumber) {

  }
}

console.log(solution(input));
