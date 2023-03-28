import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function BlogPostList({ posts }) {
    return (
        <div className="StudentList componentBox">
        <List>
            {posts.map(post => (
                <ListItem key={post.id}>
                    <ListItemText primary={post.title} secondary={post.body} />
                </ListItem>
            ))}
        </List>
        </div>
    );
}

export default BlogPostList;