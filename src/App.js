import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './styles.css';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  // Toggle refresh to force UserList to refetch data
  const handleUserChange = () => setRefresh(!refresh);

  return (
    <div className="container">
      <h1>User Management</h1>
      <UserForm onUserChange={handleUserChange} />
      <UserList refresh={refresh} />
    </div>
  );
};

export default App;
