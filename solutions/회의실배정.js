const INPUT_PATH = "../inputs/회의실배정.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

const timetable = input.map((time) => time.split(" ").map(Number));

function f(times) {
  const n = times.length;
  times.sort((a, b) => a[0] - b[0] ? a[0] - b[0] : a[1] - b[1]);
  let rooms = 0;

  if (n > 0) rooms = 1;

  let oldEnd = times[0][1];
  let newStart, newEnd;

  for (let i = 1; i < n; i++) {
    [newStart, newEnd] = times[i];

    if (newStart > oldEnd) {
      rooms++;
      oldEnd = newEnd;
    }

    if (newStart < oldEnd && newEnd < oldEnd) {
      oldEnd = newEnd;
    }

    if (newStart === oldEnd) {
      if (newEnd < oldEnd) {
        oldEnd = newEnd;
      } else {
        rooms++;
      }
    }
  }

  return rooms;
}

console.log(f(timetable));
