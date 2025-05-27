import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FeedbackList({ subject }) {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = subject ? `/api/feedbacks/${subject}` : '/api/feedbacks';
      const res = await axios.get(`http://localhost:5000${url}`);
      setFeedbacks(res.data);
    };
    fetchData();
  }, [subject]);

  return (
    <div>
      {feedbacks.map((fb, idx) => (
        <div key={idx} className="card">
          <h5>{fb.subject}</h5>
          <p><strong>{fb.studentName}</strong> rated: {fb.rating}/5</p>
          <p>{fb.comments}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;
