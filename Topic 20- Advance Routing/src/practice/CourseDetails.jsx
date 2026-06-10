import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

export const CourseDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', border: '2px dashed purple', marginTop: '20px' }}>
      <h2>Currently Watching: {id}</h2>
      <p>This is the dynamic viewer page well!</p> 
      <button 
        onClick={() => navigate('/dashboard/courses')} 
        style={{ cursor: 'pointer', padding: '5px 10px' }}
      >
        Go Back to Directory
      </button>
    </div>
  );
}