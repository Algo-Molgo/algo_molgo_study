const INPUT_PATH = "../inputs/회의실배정.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const totalLength = input.shift();
const meetingTime = input
  .map((meeting) => meeting.split(" ").map(Number))
  .sort(([start1, end1], [start2, end2]) => {
    if (end1 === end2) {
      return start1 - start2;
    }

    return end1 - end2;
  });
const result = [];

for (let i = 0; i < meetingTime.length; i++) {
  const [startTime, endTime] = meetingTime[i];

  if (!result.length) {
    result.push(meetingTime[i]);

    continue;
  }

  const [_, currentEndTime] = result[result.length - 1];

  if (startTime >= currentEndTime) {
    result.push(meetingTime[i]);
  }
}

console.log(result.length);
