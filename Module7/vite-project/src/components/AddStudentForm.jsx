import { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function AddStudentForm({ handleAdd }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleAdd(name, location);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <TextField
        label="Name"
        value={name}
        onChange={handleNameChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Location"
        value={location}
        onChange={handleLocationChange}
        fullWidth
        required
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
