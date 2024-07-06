// src/components/BlogPost.js
import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
