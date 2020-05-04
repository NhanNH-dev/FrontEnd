import React from "react";
import { useState } from "react";
import "./style.css";
function getRandomColor() {
  const Color_List = ["yellow", "red", "black", "orange", "blue"];
  const randomColor = Math.floor(Math.random() * 5);
  return Color_List[randomColor];
}
function ColorBox() {
  const [color, setColor] = useState(() => {
    const initialColor = localStorage.getItem("color-box") || "deeppink";
    return initialColor;
  });

  function changeColor() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("color-box", newColor);
  }

  return (
    <div
      className="color-box"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    >
      react hook
    </div>
  );
}

export default ColorBox;
