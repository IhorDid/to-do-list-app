import React from 'react';
import Button from '../Button/Button';
import css from './TaskInput.module.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/operations';
import { toast } from 'react-hot-toast';

const TaskInput = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (form.elements.text.value.trim() === '') {
      toast.error('Please, enter text');
      return;
    }
    dispatch(addTask(form.elements.text.value));
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
