import React from 'react';

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
      </div>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserCard;
