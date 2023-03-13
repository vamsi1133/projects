import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./todo.css";

function Todo(props) {
  // const [tasks, setTasks] = useState([]);
  // const [task, setTask] = useState("");

  // const addTask = (e) => {
  //   e.preventDefault();
  //   setTasks((prev) => [...prev, task]);
  //   setTask("");
  // };

  // const removeTask = (e) => {
  //   const id = e.target.id;
  //   const temp = [...tasks];
  //   temp.splice(id, 1);
  //   setTasks(temp);
  // };

  return (
    <div className="centeritems">
      <h1>ToDO APP</h1>
      <a
        href="https://www.geeksforgeeks.org/javascript-project-on-todo-list/"
        target={"_blank"}
      >
        visit this link for problem statement
      </a>
      {/* <div className="todo-wrapper">
        <form>
          <input
            onChange={(e) => setTask(e.target.value)}
            placeholder="enter task"
            value={task}
          />
          <button onClick={addTask}>Add</button>
        </form>
        <ul onDoubleClick={removeTask}>
          {tasks.map((val, index) => {
            return (
              <li id={index} className="listitems" key={index}>
                {val}
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
}

export default Todo;
