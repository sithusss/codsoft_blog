// src/data/posts.js
export const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
  ];
  
  export const addPost = (title, content) => {
    const newPost = {
      id: posts.length + 1,
      title,
      content,
    };
    posts.push(newPost);
  };
  