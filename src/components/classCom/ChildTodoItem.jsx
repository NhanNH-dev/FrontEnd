import React from "react";
import "./style.css";
import check from '../../assets/check.svg';
import checksuccess from '../../assets/check-success.svg';
function ChildTodoItem (props) {
    const { item, onItemClick } = props;
    let classname = "todo";
    let url = check;
    if (item.isComplete) {
      classname += " complete";
      url= checksuccess;
    }else{
        url=check
    }
    
    return (
      <div className="todoItems">
          <img onClick={onItemClick} src={url} alt={url}/>
        <p  className={classname}>
          {item.name}-{item.age}
        </p>
      </div>
    );
}
export default ChildTodoItem;