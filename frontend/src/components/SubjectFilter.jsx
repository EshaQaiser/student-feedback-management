import React from 'react';

function SubjectFilter({ subjects, onSelect }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">All Subjects</option>
      {subjects.map((s, i) => (
        <option key={i} value={s}>{s}</option>
      ))}
    </select>
  );
}

export default SubjectFilter;
