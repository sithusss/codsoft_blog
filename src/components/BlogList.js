// src/components/BlogList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import BlogPost from './BlogPost';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const postsSnapshot = await getDocs(postsCollection);
      const postsList = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsList);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BlogList;
