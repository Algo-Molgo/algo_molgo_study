//INPUT_PATH에 오늘 문제에 해당하는 input파일경로를 적어주세요
const INPUT_PATH = "../inputs/스티커.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCaseCount = Number(input.shift());

const findMaxSum = () => {
  const lengthOfLine = input.shift();
  const stickerArr = input
    .splice(0, 2)
    .map((item) => item.split(" ").map((item) => Number(item)));

  const dp = Array.from({ length: stickerArr.length }, () =>
    Array(stickerArr[0].length).fill(0)
  );

  dp[0][0] = stickerArr[0][0];
  dp[1][0] = stickerArr[1][0];
  dp[0][1] = dp[1][0] + stickerArr[0][1];
  dp[1][1] = dp[0][0] + stickerArr[1][1];

  for (let i = 2; i < lengthOfLine; i++) {
    dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + stickerArr[0][i];
    dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + stickerArr[1][i];
  }

  return Math.max(
    dp[0][stickerArr[0].length - 1],
    dp[1][stickerArr[0].length - 1]
  );
};

const solution = () => {
  let answerArr = [];

  for (let i = 0; i < testCaseCount; i++) {
    answerArr.push(findMaxSum());
  }

  console.log(answerArr.join("\n"));
};

solution();
