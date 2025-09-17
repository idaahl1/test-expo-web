import { useState } from 'react'
import './App.css'
import type { Todo } from './types/Todo'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import AboutUs from './components/AboutUs'

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [currentPage, setCurrentPage] = useState<'tasks' | 'about'>('tasks');

  const generateId = () => Date.now().toString() + Math.random().toString(36).substr(2, 9);

  const addTodo = () => {
    if (input.trim() === '') return;
    
    const newTodo: Todo = {
      id: generateId(),
      text: input.trim(),
      completed: false,
      createdAt: new Date()
    };
    
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const markAllDone = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })));
  };

  const markAllUndone = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: false })));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === 'tasks' ? (
        <div className="container">
          <h1 className="title">✅ My Todo List</h1>
          <TodoForm
            input={input}
            onInputChange={setInput}
            onSubmit={addTodo}
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
      ) : (
        <AboutUs onNavigateToTasks={() => setCurrentPage('tasks')} />
      )}
    </div>
  );
}

export default App
