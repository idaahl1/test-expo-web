interface TodoActionsProps {
  onMarkAllDone: () => void;
  onMarkAllUndone: () => void;
  onClearCompleted: () => void;
  hasCompletedTodos: boolean;
}

const TodoActions: React.FC<TodoActionsProps> = ({ 
  onMarkAllDone, 
  onMarkAllUndone, 
  onClearCompleted, 
  hasCompletedTodos 
}) => {
  return (
    <div className="todo-actions">
      <button onClick={onMarkAllDone} className="action-button">
        ✅ Mark All Done
      </button>
      <button onClick={onMarkAllUndone} className="action-button">
        🔄 Mark All Undone
      </button>
      <button 
        onClick={onClearCompleted} 
        className="action-button clear-button"
        disabled={!hasCompletedTodos}
      >
        🗑️ Clear Completed
      </button>
    </div>
  );
};

export default TodoActions;