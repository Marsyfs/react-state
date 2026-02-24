import React, { useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { title: "Do laundry",     priority: "low",    done: false },
    { title: "Finish report",  priority: "high",   done: true },
    { title: "Buy groceries",  priority: "medium", done: false }
  ]);

  const markAllDone = () => {
    setTasks(prevTasks =>
      prevTasks.map(task => ({ ...task, done: true }))
    );
  };

  const addTask = () => {
    setTasks(prevTasks => [
      ...prevTasks,
      { title: "New task", priority: "low", done: false }
    ]);
  };

  return (
    <div>
      <h2>Tasks</h2>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            Title: {task.title} | Priority: {task.priority} | Done:{" "}
            {task.done ? "Yes" : "No"}
          </li>
        ))}
      </ul>

      <button onClick={markAllDone}>Mark all done</button>
      <button onClick={addTask}>Add task</button>
    </div>
  );
}
