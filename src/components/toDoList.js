import React from 'react';

const ToDoList = props => {
  return (
    <div>
      <input type="text" value={props.toDoInput} onChange={props.changeHandler} />
      <button onClick={props.addToDo}>Submit ToDo</button>
      <ul>
          {props.toDoList.map((item, i) => {
            return <li key={i + 1}>{item}</li>;
          })}
      </ul>
    </div>
  );
};

export default ToDoList;
