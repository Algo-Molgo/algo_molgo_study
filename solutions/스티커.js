const INPUT_PATH = "../inputs/스티커.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const testCases = inputArguments[0];
  let totals = [];
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  const answers = [];

  for (let testCase = 1; testCase <= testCases; testCase += 1) {
    const N = Number(inputArguments[(testCase - 1) * 3 + 1]);
    const stickers = [
      inputArguments[(testCase - 1) * 3 + 2].split(" ").map(Number),
      inputArguments[testCase * 3].split(" ").map(Number),
    ];
    const visited = [Array(N).fill(false), Array(N).fill(false)];

    dfs(stickers, visited, 0, 0, 0, N);

    answers.push(Math.max(...totals));
    totals = [];
  }

  function dfs(stickers, visited, row, col, total, N) {
    if (row >= 2) {
      totals.push(total);

      return;
    }

    visited[row][col] = true;

    if (col >= N) {
      dfs(stickers, visited, row + 1, 0, total, N);

      return;
    }

    for (let y = row; y < 2; y += 1) {
      for (let x = col; x < N; x += 1) {
        const currentVisited = [];

        if (!visited[y][x]) {
          total += stickers[y][x];

          for (let i = 0; i < 4; i += 1) {
            const [ny, nx] = [y + dy[i], x + dx[i]];

            if (0 <= ny && ny < 2 && 0 <= nx && nx < N && !visited[ny][nx]) {
              visited[ny][nx] = true;
              currentVisited.push([ny, nx]);
            }
          }

          dfs(stickers, visited, y, x + 1, total, N);

          for (let i = 0; i < currentVisited.length; i += 1) {
            const [y, x] = currentVisited[i];
            visited[y][x] = false;
          }
        }
      }
    }
  }

  return answers;
}

console.log(solution(input).join("\n"));
