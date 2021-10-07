import { useState, useEffect } from 'react';
import db from '../firebase/firebase';
import firebase from 'firebase';
import { Button, FormControl, Input, List, InputLabel } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import Todo from './Todo';

const FirstList = ({ title }) => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('daily todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setTodos(
          snapshot.docs.map(doc => ({
            id: doc.id,
            todo: doc.data().todo,
          }))
        );
      });
  }, []);

  const addTodo = event => {
    event.preventDefault();

    const todo = db.collection('daily todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    const newTodo = {
      id: todo.then(res => res.id),
      input,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  const copyURL = () => {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Daily todos url copied to clipboard!');
  };

  return (
    <div className="todo-border">
      <div className="form-container">
        <div className="todo-title-container">
          <h1 className="todo-title">{title}</h1>
          <LinkIcon onClick={copyURL} style={{ cursor: 'pointer' }} />
        </div>
        <form>
          <FormControl>
            <InputLabel>Write a Todo</InputLabel>
            <Input
              value={input}
              onChange={event => setInput(event.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              onClick={addTodo}
              disabled={!input}
            >
              Add Todo
            </Button>
          </FormControl>
        </form>
      </div>
      <List>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            text={todo.todo}
            id={todo.id}
            collection="daily todos"
          />
        ))}
      </List>
    </div>
  );
};

export default FirstList;
