import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import SubjectFilter from './components/SubjectFilter';

function App() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const subjects = ['Math', 'Physics', 'Chemistry'];

  return (
    <div className="container">
      <h1>Student Feedback System</h1>
      <FeedbackForm />
      <SubjectFilter subjects={subjects} onSelect={setSelectedSubject} />
      <FeedbackList subject={selectedSubject} />
    </div>
  );
}

export default App;
