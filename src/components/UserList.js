import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UserList = ({ refresh }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [refresh]);  // Re-fetch data when `refresh` changes

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:3001/users');
    setUsers(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    fetchUsers();  // Refresh the list after deletion
  };

  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default UserList;
