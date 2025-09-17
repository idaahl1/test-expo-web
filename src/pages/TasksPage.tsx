import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { useTodos } from '../hooks/useTodos';

const TasksPage: React.FC = () => {
  const [input, setInput] = useState('');
  const {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    markAllDone,
    markAllUndone,
    clearCompleted,
  } = useTodos();

  const handleAddTodo = () => {
    addTodo(input);
    setInput('');
  };

  return (
    <div className="container">
      <h1 className="title">✅ My Todo List</h1>
      <TodoForm
        input={input}
        onInputChange={setInput}
        onSubmit={handleAddTodo}
      />
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onRemoveTodo={removeTodo}
        onMarkAllDone={markAllDone}
        onMarkAllUndone={markAllUndone}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
};

export default TasksPage;