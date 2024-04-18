import React, { useState } from 'react';
import './App.css';

const Blockchain = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [studentData, setStudentData] = useState([{ name: '', id: '', grade: '', course: '', attendance: '' }]);
  const [blocks, setBlocks] = useState([]);

  const handleAddStudent = () => {
    setStudentData([...studentData, { name: '', id: '', grade: '', course: '', attendance: '' }]);
  };

  const handleGenerateBlocks = () => {
    const newBlocks = studentData.map((student) => ({
      name: student.name,
      id: student.id,
      grade: student.grade,
      course: student.course,
      attendance: student.attendance,
      hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }));
    setBlocks(newBlocks);
  };

  const handleDeleteBlocks = () => {
    setBlocks([]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedData = [...studentData];
    updatedData[index][field] = value;
    setStudentData(updatedData);
  };

  return (
    <div className="Blockchain" >
      <div className="Form">
        {studentData.map((student, index) => (
          <div key={index} className="Student">
            <input type="text" placeholder="Name" value={student.name} onChange={(e) => handleInputChange(index, 'name', e.target.value)} />
            <input type="text" placeholder="ID" value={student.id} onChange={(e) => handleInputChange(index, 'id', e.target.value)} />
            <input type="text" placeholder="Grade" value={student.grade} onChange={(e) => handleInputChange(index, 'grade', e.target.value)} />
            <input type="text" placeholder="Course" value={student.course} onChange={(e) => handleInputChange(index, 'course', e.target.value)} />
            <input type="text" placeholder="Attendance" value={student.attendance} onChange={(e) => handleInputChange(index, 'attendance', e.target.value)} />
          </div>
        ))}
        <div className="Options">
          <button onClick={handleAddStudent}>Add</button>
          <button onClick={handleDeleteBlocks}>Delete Blocks</button>
          <button onClick={handleGenerateBlocks}>Create Blocks</button>
        </div>
      </div>
      <div className="Blocks">
        {blocks.map((block, index) => (
          <div key={index} className="Block">
            <h2>Block {index + 1}</h2>
            <p><strong>Name:</strong> {block.name}</p>
            <p><strong>ID:</strong> {block.id}</p>
            <p><strong>Grade:</strong> {block.grade}</p>
            <p><strong>Course:</strong> {block.course}</p>
            <p><strong>Attendance:</strong> {block.attendance}</p>
            <p><strong>Hash:</strong> {block.hash}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blockchain;
