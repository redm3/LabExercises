import { useState, useEffect } from 'react';
/* import { Container, Typography } from '@mui/material'; */
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import BlogPostForm from './BlogPostForm';
import BlogPostList from './BlogPostList';
import axios from 'axios';

function BlogPost() {
  const [posts, setPosts] = useState([]);

//https://jsonplaceholder.typicode.com/

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setPosts(res.data))
      
      .catch(err => console.log(err));
      
  }, []);

  const addPost = (newPost) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(res => setPosts([...posts, res.data]))
      .catch(err => console.log(err));
  };

  console.log(posts)

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Media Blog Posts
      </Typography>
      <BlogPostList posts={posts} />
      <BlogPostForm addPost={addPost} />
    </Container>
  );
}

export default BlogPost;
