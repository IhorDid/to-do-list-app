import React from 'react';
import Button from '../Button/Button';
import css from './TaskInput.module.css';

const TaskInput = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="text"
        placeholder="Add task..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskInput;
