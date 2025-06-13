import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../../redux/operations';
import css from './Task.module.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(task.text);

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () =>
    dispatch(
      updateTask({ id: task.id, newData: { completed: !task.completed } }),
    );

  const handleSave = () => {
    if (text.trim() && text !== task.text) {
      dispatch(updateTask({ id: task.id, newData: { text } }));
    }
    setEditMode(false);
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />

      {editMode ? (
        <input
          className={css.inputMode}
          value={text}
          onChange={e => setText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={e => e.key === 'Enter' && handleSave()}
          autoFocus
        />
      ) : (
        <p onDoubleClick={() => setEditMode(true)} className={css.text}>
          {task.text}
        </p>
      )}

      <button onClick={handleDelete} className={css.btn}>
        ❌
      </button>
    </div>
  );
};
