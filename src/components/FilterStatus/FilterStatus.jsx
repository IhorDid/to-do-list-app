import React from 'react';
import css from './FilterStatus.module.css';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/filterSlice';

const FilterStatus = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.status);

  const handleChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button selected={filter === 'all'} onClick={() => handleChange('all')}>
        All
      </Button>
      <Button
        selected={filter === 'active'}
        onClick={() => handleChange('active')}
      >
        Active
      </Button>
      <Button
        selected={filter === 'completed'}
        onClick={() => handleChange('completed')}
      >
        Completed
      </Button>
    </div>
  );
};

export default FilterStatus;
