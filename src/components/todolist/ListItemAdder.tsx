import React, { useState } from 'react';
import { Button } from 'antd';
import {Input} from 'antd';

interface ListItemAdderProps {
  onAddItem: (newItem: string) => void;
}

export default function ListItemAdder({ onAddItem }: ListItemAdderProps) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      onAddItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="listitemadder">
      <Input
        type="text"
        className="input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add new item"
      />
      <Button className="button add-button" onClick={handleAddItem}>Add</Button>
    </div>
  );
}
