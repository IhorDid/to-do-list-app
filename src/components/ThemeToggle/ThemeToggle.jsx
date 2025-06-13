import { useTheme } from 'next-themes';
import css from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <button className={css.button} onClick={() => setTheme(nextTheme)}>
      {nextTheme === 'dark' ? '🌙 Dark mode' : '☀️ Light mode'}
    </button>
  );
};
