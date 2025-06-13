import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from 'next-themes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
