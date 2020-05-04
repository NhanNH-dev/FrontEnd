import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
  const { todos, onClickItem } = props;

  function handleClick(item) {
    onClickItem(item);
  }
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id} onClick={() => handleClick(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

TodoItem.propTypes = {
  todos: PropTypes.array,
};
TodoItem.defaultProps = {
  todos: [],
};
export default TodoItem;
