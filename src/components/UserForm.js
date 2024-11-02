import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ selectedUser, onUserChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    if (selectedUser) setFormData(selectedUser);
  }, [selectedUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      await axios.put(`http://localhost:3001/users/${formData.id}`, formData);
    } else {
      await axios.post('http://localhost:3001/users', formData);
    }
    onUserChange();  // Trigger refresh after submit
    setFormData({ name: '', username: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
