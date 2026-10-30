function StudentProfile({ name, department, year }) {
  const profileStyle = {
    border: '2px solid #3498db',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#fafafa',
  };

  return (
    <div style={profileStyle}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
}

export default StudentProfile;
