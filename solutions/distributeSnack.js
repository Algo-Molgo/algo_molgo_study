const INPUT_PATH = "inputs/distributeSnack.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [childCount, snackCount] = input.shift().split(" ").map(Number);
const snacks = input.shift().split(" ").map(Number).sort((a, b) => b - a);

if (snackCount >= childCount) {
  console.log(snacks[childCount - 1]);
  return
};

const sum = snacks.reduce((pre, cur) => pre + cur, 0);
let maxSnackDistribution = Math.floor(sum / childCount);
let count = 0;

while(maxSnackDistribution > 0) {
  snacks.forEach((snack) => {
    if (count >= childCount) return;

    count += Math.floor(snack / maxSnackDistribution);
  });

  if (count >= childCount) {
    console.log(maxSnackDistribution);
    return;
  }

  maxSnackDistribution--;
  count = 0;
}

console.log(0);

