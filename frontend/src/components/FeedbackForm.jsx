import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [formData, setFormData] = useState({ studentName: '', subject: '', rating: '', comments: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', formData);
      setMessage('Feedback submitted successfully!');
    } catch (err) {
      setMessage('Submission failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="studentName" placeholder="Your Name" required onChange={handleChange} />
      <input name="subject" placeholder="Subject" required onChange={handleChange} />
      <input name="rating" type="number" min="1" max="5" placeholder="Rating (1-5)" required onChange={handleChange} />
      <textarea name="comments" placeholder="Comments" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
  );
}

export default FeedbackForm;
