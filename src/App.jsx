import { useEffect, useState } from 'react';
import 'modern-normalize';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import TaskInput from './components/TaskInput/TaskInput';
import Layout from './components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './redux/operations';
import { TaskList } from './components/TaskList/TaskList';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.tasks.loading);
  const error = useSelector(state => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <>
      <Layout>
        <h1>To Do List</h1>
        <AppBar />
        <TaskInput />
        {loading && !error && <b>Loading, please wait...</b>}
        <TaskList />
      </Layout>
    </>
  );
}

export default App;
