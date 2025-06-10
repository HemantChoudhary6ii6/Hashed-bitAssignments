import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    const trimmed = task.trim();
    if (trimmed === "") return;

    const updatedList = [...todoList, trimmed].sort((a, b) =>
      a.localeCompare(b)
    );
    setTodoList(updatedList);
    setTask(""); // Clear input
  };

  const deleteTask = (indexToDelete) => {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        id="task-input"
      />

      <button onClick={addTask} id="add-btn">Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todoList.map((item, index) => (
          <li key={index} data-testid={`todo-${index}`} style={{ marginTop: "10px" }}>
            {item}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => deleteTask(index)}
              data-testid={`delete-${index}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
