import { useState, useEffect } from "react";
function formatDate(now) {
  const hours = `0${now.getHours()}`.slice(-2);
  const minutes = `0${now.getMinutes()}`.slice(-2);
  const seconds = `0${now.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}
function useClock() {
  const [timeString, setTimeString] = useState("");
  useEffect(() => {
    const clock = setInterval(() => {
      const now = new Date();
      const newStringtime = formatDate(now);
      setTimeString(newStringtime);
    }, 1000);
    return () => {
      clearInterval(clock);
    };
  }, []);
  return { timeString };
}
export default useClock;
