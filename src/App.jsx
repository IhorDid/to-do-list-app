import { useState } from 'react';
import 'modern-normalize';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import TaskInput from './components/TaskInput/TaskInput';
import Layout from './components/Layout/Layout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <h1>To Do List</h1>
        <AppBar />
        <TaskInput />
      </Layout>
    </>
  );
}

export default App;
