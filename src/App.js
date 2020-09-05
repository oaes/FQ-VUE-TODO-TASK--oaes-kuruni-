import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <header>
        <h2>ToDo List App</h2>
      </header>
      <Form set={todo} setTodo={setTodo} setInputText={setInputText} />
      <TodoList todo={todo} />
    </div>
  );
}

export default App;
