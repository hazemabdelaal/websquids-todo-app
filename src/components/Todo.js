import { useState } from 'react';
import db from '../firebase/firebase';
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  ListItem,
  ListItemText,
} from '@mui/material';

const Todo = ({ text, id, collection }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <ListItem>
      <ListItemText
        primary={text}
        style={{ textDecorationLine: checked ? 'line-through' : 'none' }}
      />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleChange} />}
          label="Done"
        />
      </FormGroup>
      <Button onClick={event => db.collection(collection).doc(id).delete()}>
        Delete
      </Button>
    </ListItem>
  );
};

export default Todo;
