const INPUT_PATH = "../inputs/요세푸스문제.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(inputArguments) {
  const [member, kill] = inputArguments;

  const memberList = Array.from({ length: member }, (_, i) => i + 1);
  const killList = "";
  let count = 0;

  while (memberList.length > 0) {
    count = (count + kill - 1) % memberList.length;
    killList += memberList.splice(count, 1);
    killList += ", ";
  }
  killList = killList.slice(0, -1);

  const result = `<${killList}>`;

  return result;
}

console.log(solution(input));
