import React from 'react';
import FilterStatus from '../FilterStatus/FilterStatus';
import css from './AppBar.module.css';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

const AppBar = () => {
  return (
    <header>
      <section>
        <div className={css.wrapper}>
          <h2 className={css.title}>Filter Tasks</h2>
          <ThemeToggle />
        </div>
        <FilterStatus />
      </section>
    </header>
  );
};

export default AppBar;
