//INPUT_PATH에 오늘 문제에 해당하는 input파일경로를 적어주세요
const INPUT_PATH = "../inputs/요세푸스문제.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);

function solution(N, K) {
  const result = [];
  const peopleList = [];
  let count = 1;

  for (let i = 1; i <= N; i++) {
    peopleList.push(i);
  }

  while (peopleList.length > 0) {
    const shiftPeople = peopleList.shift();

    if (count % K === 0) {
      result.push(shiftPeople);
    } else {
      peopleList.push(shiftPeople);
    }

    count++;
  }

  return "<" + result.join(", ") + ">";
}

console.log(solution(N, K));
