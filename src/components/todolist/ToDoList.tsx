import React, { useState, useEffect } from 'react';
import ToDoListItem from './ToDoListItem';
import ListItemAdder from './ListItemAdder';
import styles from "./todolist.module.scss";
import { Button } from 'antd';

export default function ToDoList() {
  const [items, setItems] = useState<string[]>([]);

  const handleDelete = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleAddItem = (newItem: string) => {
    setItems([...items, newItem]);
  };

  const handleReset = () => {
    setItems([]);
  };

  useEffect(() => {
    console.log("Lista aggiornata:", items);
  }, [items]);

  return (
    <div className={styles.todolistapp}>
      <h1>To Do List</h1>
      <ListItemAdder onAddItem={handleAddItem} />
      <Button className={styles.button} onClick={handleReset}>Reset</Button>
      {items.map((item, index) => (
        <ToDoListItem
          key={index}
          item={item}
          index={index}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
