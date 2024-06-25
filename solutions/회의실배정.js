const INPUT_PATH = "../inputs/회의실배정.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const N = inputArguments[0];
  const meetings = inputArguments
    .slice(1)
    .map((time) => time.split(" ").map(Number));
  meetings.sort((meetingA, meetingB) => meetingA[0] - meetingB[0]);
  meetings.sort((meetingA, meetingB) => meetingA[1] - meetingB[1]);

  let meetingsCount = 0;
  let lastMeetingEndTime = 0;

  meetings.forEach(([startTime, EndTime]) => {
    if (startTime >= lastMeetingEndTime) {
      lastMeetingEndTime = EndTime;
      meetingsCount += 1;
    }
  });

  return meetingsCount;
}

console.log(solution(input));
