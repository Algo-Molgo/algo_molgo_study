const INPUT_PATH = "../inputs/바이러스.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [computerCount, pairCount, ...pairs] = input;
const networkMap = new Map();
const isSicked = Array.from({ length: computerCount }, (value) => false);
let result = 0;

pairs.forEach((pair) => {
  const [startComputer, endComputer] = pair.split(" ");

  networkMap.set(startComputer, [
    ...(networkMap.get(startComputer) || []),
    endComputer,
  ]);

  networkMap.set(endComputer, [
    ...(networkMap.get(endComputer) || []),
    startComputer,
  ]);
});

function findSickCompter(currentComuter) {
  const connectedComuter = networkMap.get(currentComuter);

  if (!connectedComuter) {
    return;
  }

  for (const computer of connectedComuter) {
    if (isSicked[computer - 1]) {
      continue;
    }

    result++;
    isSicked[computer - 1] = true;

    findSickCompter(computer);
  }
}

findSickCompter("1");

console.log(result ? result - 1 : result);
