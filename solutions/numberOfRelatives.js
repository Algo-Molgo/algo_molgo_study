const INPUT_PATH = "inputs/numberOfRelatives.txt";

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
console.log(relationMap);

console.log(relationMap.get(target1), target1);
console.log(relationMap.get(target2));