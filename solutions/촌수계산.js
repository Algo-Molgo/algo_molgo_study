const INPUT_PATH = "../inputs/촌수계산.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const [totalPeople, targetPeople, relationCount, ...relations] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let result = Infinity;
const parentList1 = {};
const parentList2 = {};

let [target1, target2] = targetPeople.split(" ").map(Number);
const relationMap = new Map();

for (const relation of relations) {
  const [parent, child] = relation.split(" ").map(Number);

  relationMap.set(child, parent);
}

function recursion(target1, target2, count) {
  const parent1 = relationMap.get(target1);
  const parent2 = relationMap.get(target2);

  if (parentList2[target1] || parentList1[target2]) {
    result = Math.min(result, count);

    return;
  }

  if (parent1) {
    parentList1[parent1] = true;

    recursion(parent1, target2, count + 1);

    delete parentList1[parent1];
  }

  if (parent2) {
    parentList2[parent2] = true;

    recursion(target1, parent2, count + 1);

    delete parentList2[parent2];
  }
}

recursion(target1, target2, 0);

console.log(result === Infinity ? -1 : result);
