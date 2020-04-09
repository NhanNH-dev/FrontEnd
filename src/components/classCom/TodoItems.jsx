import React from "react";
import ChildTodoItem from "./ChildTodoItem";
import "./style.css";
import add from "../../assets/add.svg";
import _ from "lodash";
function TodoItems() {
  const [TodoItems, setTodoItems] = useState([]);
  const [NewsToDoList, setNewsToDoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("all");

  // componentDidMount() {
  //   const TodoItems = JSON.parse(localStorage.getItem("TodoItems"));
  //     setTodoItems(TodoItems != null ? TodoItems : []) , // default
  //     setNewsToDoList(TodoItems),
  // }

  // componentDidUpdate() {
  //   this.updateStorage();
  // }

  onItemClick = (item) => {
    return (event) => {
      const index = NewsToDoList.indexOf(item);
      NewsToDoList[index].isComplete = !item.isComplete;
      setNewsToDoList(NewsToDoList);
    };
  };

  updateStorage = () => {
    if (NewsToDoList != null) {
      localStorage.setItem("TodoItems", JSON.stringify(NewsToDoList));
    }
  };

  onKeyUp = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      const NewObj = { name: text, isComplete: false };
      TodoItems.push(NewObj);
      setInputValue("");
      setTodoItems(TodoItems);
      setNewsToDoList(TodoItems);
    }
  };

  onClickedButton = (e) => {
    setStatus(e.target.name),
      () => {
        if (status === "all") {
          setNewsToDoList(TodoItems);
        } else {
          setNewsToDoList(
            _.filter(
              TodoItems,
              (item) =>
                item.isComplete === (status === "completed" ? true : false)
            )
          );
        }
      };
  };

  const renderList =
    NewsToDoList &&
    NewsToDoList.length &&
    NewsToDoList.map((item, index) => (
      <ChildTodoItem
        key={index}
        item={item}
        id={index}
        onItemClick={this.onItemClick(item)}
      />
    ));
  return (
    <div className="App">
      <div className="inputTodoItems">
        <img src={add} alt={add} />
        <input
          type="text"
          name="addTodoItems"
          onKeyUp={onKeyUp}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="What needs to be done?"
        />
      </div>
      {renderList}
      <div className="divButton">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          <button
            onClick={(e) => onClickedButton(e, "active")}
            id="active"
            name="active"
          >
            Active
          </button>
          <button
            className="btn-all"
            onClick={(e) => onClickedButton(e, "all")}
            id="all"
            name="all"
          >
            All
          </button>
          <button
            onClick={(e) => onClickedButton(e, "completed")}
            id="completed"
            name="completed"
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}
