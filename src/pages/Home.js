// src/pages/Home.js
import React from 'react';
import BlogPost from '../components/BlogPost';

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
