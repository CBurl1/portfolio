import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="github-calendar">
      <GitHubCalendar
        username="cburl1"
        blockSize={14}
        blockMargin={5}
        color="#287765"
        fontSize={14}
      />
    </div>
  );
}

export default Github;
