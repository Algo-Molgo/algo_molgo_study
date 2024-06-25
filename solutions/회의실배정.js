const INPUT_PATH = "../inputs/회의실배정.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  let maxMeetings = 0;
  const N = inputArguments[0];
  const meetings = inputArguments
    .slice(1)
    .map((time) => time.split(" ").map(Number));
  meetings.sort((meetingA, meetingB) => meetingA[1] - meetingB[1]);
  meetings.sort((meetingA, meetingB) => meetingA[0] - meetingB[0]);

  const sortedMeetings = [meetings[0]];

  meetings.forEach((meeting) => {
    const lastMeeting = sortedMeetings[sortedMeetings.length - 1];

    if (lastMeeting[0] !== meeting[0]) {
      sortedMeetings.push(meeting);
    }
  });

  function findMaxMeetings(start, meets) {
    if (start >= sortedMeetings.length - 1) {
      maxMeetings = Math.max(maxMeetings, meets.length);
      return;
    }

    for (let i = start; i < sortedMeetings.length; i += 1) {
      const currentMeeting = sortedMeetings[i];

      if (
        meets[meets.length - 1] &&
        meets[meets.length - 1][1] > currentMeeting[0]
      ) {
        findMaxMeetings(start + 1, meets);
      } else {
        meets.push(currentMeeting);
        findMaxMeetings(start + 1, meets);
        meets.pop();
      }
    }
  }

  findMaxMeetings(0, []);

  return maxMeetings;
}

console.log(solution(input));
