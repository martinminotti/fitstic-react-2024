import React from 'react';

interface ToDoListItemProps {
  item: string;
  index: number;
  onDelete: (index: number) => void;
}

export default function ToDoListItem({ item, index, onDelete }: ToDoListItemProps) {
  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <div className="list-item">
      <span>{item}</span>
      <button className="button" onClick={handleDelete}>Delete</button>
    </div>
  );
}
