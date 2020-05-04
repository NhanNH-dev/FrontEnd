import React from "react";

const RED = 0;
const YELLOW = 1;
const GREEN = 2;
const container = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
};

function TrafficLight() {
  const RED = 0;
  const YELLOW = 1;
  const GREEN = 2;
  const [currentColor, setCurrentColor] = React.useState(RED);

  React.useEffect(() => {
    console.log("did mount");
    const nextColorObj = getNextColor(currentColor);
    setTimeout(() => {
      setCurrentColor(nextColorObj.nextColor);
    }, nextColorObj.nextTimeOut);
  }, [currentColor]);

  React.useEffect(() => {
    console.log("catching currentColor");
    const nextColorObj = getNextColor(currentColor);
    setTimeout(() => {
      setCurrentColor(nextColorObj.nextColor);
    }, nextColorObj.nextTimeOut);
  }, [currentColor]);

  const getNextColor = color => {
    switch (color) {
      case RED:
        return { nextColor: YELLOW, nextTimeOut: 2000 };
      case YELLOW:
        return { nextColor: GREEN, nextTimeOut: 5000 };
      case GREEN:
        return { nextColor: RED, nextTimeOut: 4000 };
      default:
        return { nextColor: RED, nextTimeOut: 800 };
    }
  };

  return (
    <div style={container}>
      <div
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          backgroundColor: currentColor === RED ? "red" : "gray"
        }}
      ></div>
      <div
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          backgroundColor: currentColor === YELLOW ? "yellow" : "gray"
        }}
      ></div>
      <div
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          backgroundColor: currentColor === GREEN ? "green" : "gray"
        }}
      ></div>
    </div>
  );
}

export default TrafficLight;
