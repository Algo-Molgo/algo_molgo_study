const INPUT_PATH = "inputs/virus.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const total= Number(input.shift());
const connectedNumber = Number(input.shift());
const list = input.map((number) => {
  const arr = number.split(" ").map(Number);
  return arr;
});

console.log(list);
