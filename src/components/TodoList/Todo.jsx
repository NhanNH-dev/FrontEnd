import React, { useState } from "react";

import TodoItem from "./TodoItem";
import FormSubmit from "../FormSubmit/FormSubmit";
function Todo() {
  const [soccerPlayer, setSoccerPlayer] = useState([
    { id: 1, name: "Fernando Torres" },
    { id: 2, name: "Steven Gerrard" },
    { id: 3, name: "Xabi Alonso" },
  ]);
  function handleOnClickItems(item) {
    const indexItem = soccerPlayer.findIndex((x) => x.id === item.id);

    if (indexItem < 0) return;
    const soccerPlayerCopy = [...soccerPlayer];
    soccerPlayerCopy.splice(indexItem, 1);
    setSoccerPlayer(soccerPlayerCopy);
  }
  function handleFormOnSubmit(formValue) {
    const soccerPlayerCopy = [...soccerPlayer];
    const newPlayer = {
      id: soccerPlayer.length + 1,
      ...formValue,
    };
    soccerPlayerCopy.push(newPlayer);
    setSoccerPlayer(soccerPlayerCopy);
  }
  return (
    <div>
      <FormSubmit onSubmit={handleFormOnSubmit} />
      <TodoItem todos={soccerPlayer} onClickItem={handleOnClickItems} />
    </div>
  );
}

export default Todo;
