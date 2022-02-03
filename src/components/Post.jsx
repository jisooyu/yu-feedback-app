import React from 'react';
import {Navigate, useNavigate, useParams, Routes, Route} from 'react-router-dom'

const Post = () => {
    const params = useParams()
    const navigate = useNavigate()
    const onClick = () => {
       navigate('/about')
    }

  return (
      <div>
          <h1>Post {params.id}</h1>
          <p>Name: {params.name}</p>
          <button onClick={onClick}>Click</button>
          <Routes>
              <Route path='/show'  element={<h1>Show this</h1> } />
          </Routes>
      </div>
  );
};

export default Post;
