import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePositon] = useState({ x: null, y: null });

  useEffect(() => {
    document.title = `you have clicked ${count}`;
    window.addEventListener("mousemove", handleMouseMove);
    return () =>{
      window.removeEventListener("mousemove", handleMouseMove);
    }
  },[count]);
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  const changeColor = () => {
    setIsOn(prevState => !prevState);
  };
  const handleMouseMove = event => {
    setMousePositon({ x: event.pageX , y: event.pageY });
  };
  return (
    <div>
      <button onClick={increment}> Function component {count} times</button>
      <div
        onClick={changeColor}
        style={{
          height: "50px",
          width: "50px",
          backgroundColor: isOn ? "green" : "yellow",
          border: "1px solid black"
        }}
      />

      <h2>Mouse Position</h2>
      <p>{JSON.stringify( mousePosition, null ,2  )}</p>
    </div>
  );
}

export default App;
