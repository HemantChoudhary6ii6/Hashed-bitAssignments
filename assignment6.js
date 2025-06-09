import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [nextId, setNextId] = useState(1);

  const addTask = () => {
    const trimmedValue = inputValue.trim();
    
    // Check if input is not empty
    if (trimmedValue === '') {
      alert('Please enter a task!');
      return;
    }

    // Check for duplicate tasks
    if (tasks.some(task => task.text.toLowerCase() === trimmedValue.toLowerCase())) {
      alert('This task already exists!');
      return;
    }

    const newTask = {
      id: nextId,
      text: trimmedValue,
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
    setInputValue(''); // Clear the input field
    setNextId(prevId => prevId + 1);
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearAllTasks = () => {
    if (tasks.length === 0) return;
    if (window.confirm('Are you sure you want to clear all tasks?')) {
      setTasks([]);
    }
  };

  const clearCompletedTasks = () => {
    const completedCount = tasks.filter(task => task.completed).length;
    if (completedCount === 0) return;
    if (window.confirm(`Are you sure you want to clear ${completedCount} completed task(s)?`)) {
      setTasks(prevTasks => prevTasks.filter(task => !task.completed));
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Sort tasks in ascending order (alphabetically)
  const sortedTasks = [...tasks].sort((a, b) => a.text.localeCompare(b.text));

  // Statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        📝 Todo List App
      </h1>

      {/* Input Section */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task..."
          style={{
            flex: 1,
            padding: '12px',
            border: '2px solid #ddd',
            borderRadius: '6px',
            fontSize: '16px'
          }}
          autoFocus
        />
        <button
          onClick={addTask}
          style={{
            padding: '12px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
        >
          Add Task
        </button>
      </div>

      {/* Statistics */}
      {totalTasks > 0 && (
        <div style={{
          padding: '15px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <strong>Total: {totalTasks}</strong> | 
            <span style={{ color: '#4CAF50', marginLeft: '5px' }}>Completed: {completedTasks}</span> | 
            <span style={{ color: '#ff9800', marginLeft: '5px' }}>Pending: {pendingTasks}</span>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {completedTasks > 0 && (
              <button
                onClick={clearCompletedTasks}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#ff9800',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                Clear Completed
              </button>
            )}
            <button
              onClick={clearAllTasks}
              style={{
                padding: '6px 12px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      )}

      {/* Task List */}
      <div>
        {sortedTasks.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: '#999',
            fontSize: '18px'
          }}>
            🎯 No tasks yet! Add one above to get started.
          </div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {sortedTasks.map((task) => (
              <li
                key={task.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '15px',
                  marginBottom: '10px',
                  backgroundColor: task.completed ? '#f0f8f0' : '#fff',
                  border: `2px solid ${task.completed ? '#4CAF50' : '#ddd'}`,
                  borderRadius: '6px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  style={{
                    marginRight: '15px',
                    transform: 'scale(1.2)',
                    cursor: 'pointer'
                  }}
                />
                <span
                  style={{
                    flex: 1,
                    fontSize: '16px',
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? '#666' : '#333',
                    opacity: task.completed ? 0.7 : 1
                  }}
                >
                  {task.text}
                </span>
                {task.completed && (
                  <span style={{
                    marginRight: '10px',
                    color: '#4CAF50',
                    fontSize: '20px'
                  }}>
                    ✓
                  </span>
                )}
                <button
                  onClick={() => deleteTask(task.id)}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#da190b'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tips */}
      <div style={{
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#e3f2fd',
        borderRadius: '6px',
        fontSize: '14px',
        color: '#666'
      }}>
        <strong>💡 Tips:</strong>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li>Press Enter to quickly add tasks</li>
          <li>Click checkboxes to mark tasks as complete</li>
          <li>Tasks are automatically sorted alphabetically</li>
          <li>Duplicate tasks are prevented</li>
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
