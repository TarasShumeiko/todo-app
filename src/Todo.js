import React from 'react';
import {
  Card,
  Checkbox,
  Typography,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  todo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px',
  },
});

const Todo = ({ id, text, isChecked, onToggle, onRemove }) => {
  const classes = useStyles();

  return (
    <Card className={classes.todo}>
      <Checkbox
        checked={isChecked}
        onClick={event => onToggle(id, event.target.checked)}
      />

      <Typography>
        {text}
      </Typography>

      <IconButton aria-label="delete" onClick={() => onRemove(id)}>
        <DeleteIcon />
      </IconButton>
    </Card>
  );
};

export default Todo;