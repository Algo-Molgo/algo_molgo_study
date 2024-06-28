const INPUT_PATH = "../inputs/바이러스.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const totalComputers = Number(input.shift());
const totalRelations = Number(input.shift());
const relations = input
  .map((item) => item.split(" "))
  .map((item) => item.map((item) => Number(item)));

function solution(computerCount, RelationCount, RelationList) {
  const relationGraph = Array.from({ length: computerCount + 1 }, () => []);
  const visited = Array.from({ length: computerCount + 1 }, () => false);
  visited[1] = true;
  let AffectedComputers = 0;

  RelationList.map(([from, to]) => {
    relationGraph[from].push(to);
    relationGraph[to].push(from);
  });

  function findAffectedComputers(start) {
    for (const relation of relationGraph[start]) {
      if (!visited[relation]) {
        visited[relation] = true;
        AffectedComputers += 1;
        findAffectedComputers(relation);
      }
    }
  }

  findAffectedComputers(1);

  return AffectedComputers;
}

console.log(solution(totalComputers, totalRelations, relations));
