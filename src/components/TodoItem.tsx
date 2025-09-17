import type { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span
        onClick={() => onToggle(todo.id)}
        className="todo-text"
      >
        {todo.text}
      </span>
      <button 
        onClick={() => onRemove(todo.id)} 
        className="remove-button"
        aria-label={`Remove todo: ${todo.text}`}
      >
        ✕
      </button>
    </li>
  );
};

export default TodoItem;