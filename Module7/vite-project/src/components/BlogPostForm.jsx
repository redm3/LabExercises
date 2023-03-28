import React, { useState } from 'react';
/* import { TextField, Button } from '@mui/material'; */
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function BlogPostForm({ addPost }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, body };
    addPost(newPost);
    setTitle('');
    setBody('');
  };

  return (
    <div className="StudentList componentBox">
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
        Add Post
      </Button>
    </form>
    </div>
  );
}

export default BlogPostForm;
