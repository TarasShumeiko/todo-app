import React, { useState } from 'react';
import uuid from 'uuid';
import {
  Grid,
  Button,
  Container,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';

import Todo from './Todo';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    margin: '20px',
  },
});

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h3" align="center" className={classes.title}>
        TODO App
      </Typography>

      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item>
          <TextField
            variant="outlined"
            size="small"
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            disabled={!text}
            variant="contained"
            color="primary"
            onClick={() => {
              setTodos(oldTodos => [{
                text,
                id: uuid(),
                isChecked: false,
              }, ...oldTodos]);
            }}
          >
            Add
          </Button>
        </Grid>
      </Grid>

      {todos.map(todo => (
        <Todo
          id={todo.id}
          key={todo.id}
          text={todo.text}
          isChecked={todo.isChecked}
          onRemove={(id) => {
            setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id));
          }}
          onToggle={(id, checked) => {
            setTodos(oldTodos => oldTodos.map(todo => (
              todo.id === id ? { ...todo, isChecked: checked } : todo
            )));
          }}
        />
      ))}
    </Container>
  );
};

export default App;
