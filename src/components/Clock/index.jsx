import React from "react";
import useClock from "../../hooks/useClock";

function Clock() {
  const { timeString } = useClock();
  return (
    <div>
      <p style={{ color: "green" }}>{timeString}</p>
      <p style={{ borderColor: "black" }}>{timeString}</p>
    </div>
  );
}

export default Clock;
