import React from "react";
import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className="task"
      onDoubleClick={() => onToggle(task.id, !task.complete)}
    >
      <h3 className={task.complete ? "complete" : ""}>
        {task.title}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
}

export default Task;
