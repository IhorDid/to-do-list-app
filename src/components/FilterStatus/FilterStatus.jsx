import React from 'react';
import css from './FilterStatus.module.css';
import Button from '../Button/Button';

const FilterStatus = () => {
  return (
    <div className={css.wrapper}>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </div>
  );
};

export default FilterStatus;
