export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoActions {
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}