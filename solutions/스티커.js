const INPUT_PATH = "../inputs/스티커.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

function solution(input) {
  const testCaseCount = parseInt(input[0]);
  let currentIndex = 1;
  let results = [];

  for (let testCase = 0; testCase < testCaseCount; testCase++) {
    const columnCounts = parseInt(input[currentIndex++]);
    const stickers = [
      input[currentIndex++].split(" ").map(Number),
      input[currentIndex++].split(" ").map(Number),
    ];

    if (columnCounts === 1) {
      results.push(Math.max(stickers[0][0], stickers[1][0]));
      continue;
    }

    let dp = Array.from({ length: columnCounts }, () => Array(3).fill(0));
    dp[0][0] = 0;
    dp[0][1] = stickers[0][0];
    dp[0][2] = stickers[1][0];

    for (let i = 1; i < columnCounts; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
      dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2]) + stickers[0][i];
      dp[i][2] = Math.max(dp[i - 1][0], dp[i - 1][1]) + stickers[1][i];
    }

    results.push(
      Math.max(
        dp[columnCounts - 1][0],
        dp[columnCounts - 1][1],
        dp[columnCounts - 1][2]
      )
    );
  }

  console.log(results.join("\n"));
}

solution(input);
