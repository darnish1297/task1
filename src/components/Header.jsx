function Header() {
  const headerStyle = {
    color: '#2c3e50',
    backgroundColor: '#ecf0f1',
    textAlign: 'center',
    padding: '20px',
    borderBottom: '3px solid #3498db',
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ color: '#3498db' }}>Student Management System</h1>
    </header>
  );
}

export default Header;
