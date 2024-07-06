// src/components/EditPost.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const postDoc = await getDoc(doc(db, 'posts', id));
      if (postDoc.exists()) {
        setTitle(postDoc.data().title);
        setContent(postDoc.data().content);
      } else {
        navigate('/');
      }
    };
    fetchPost();
  }, [id, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, 'posts', id), { title, content });
    navigate('/');
  };

  return (
    <form onSubmit={handleUpdate}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPost;
