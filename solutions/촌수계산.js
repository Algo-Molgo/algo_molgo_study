const INPUT_PATH = "../inputs/촌수계산.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  let chonsu = 1;
  const total = parseInt(inputArguments[0]);
  const [start, end] = inputArguments[1].split(" ");
  const relationships = {};

  for (let i = 1; i <= total; i += 1) {
    relationships[i] = [];
  }

  inputArguments
    .slice(3)
    .map((relationship) => relationship.split(" "))
    .forEach((relationship) => {
      const [parent, child] = relationship;
      relationships[parent].push(child);
      relationships[child].push(parent);
    });

  const visited = Array(total).fill(false);
  const queue = relationships[start].slice();
  visited[start] = true;

  while (true) {
    if (queue.length === 0) {
      break;
    }

    chonsu += 1;
    tempQueue = [];

    while (queue.length > 0) {
      const next = queue.pop();
      visited[next] = true;

      for (const person of relationships[next]) {
        if (!visited[person]) {
          tempQueue.push(person);
        }

        if (person === end.toString()) {
          return chonsu;
        }
      }
    }

    tempQueue.forEach((person) => queue.push(person));
  }

  return -1;
}

console.log(solution(input));
