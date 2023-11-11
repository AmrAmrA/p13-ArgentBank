import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../features/auth/authSlice';

export default function UserHeader() {
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState('');
  const [editedLastName, setEditedLastName] = useState('');
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedFirstName(user.body.firstName);
    setEditedLastName(user.body.lastName);
  };

  const handleSave = () => {
    if (editedFirstName !== user.body.firstName || editedLastName !== user.body.lastName) {
      dispatch(updateUserProfile({
        firstName: editedFirstName,
        lastName: editedLastName
      }));
    }
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <header className="header">
      <h1>
        Welcome back
        <br />
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedFirstName}
              onChange={(e) => setEditedFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              type="text"
              value={editedLastName}
              onChange={(e) => setEditedLastName(e.target.value)}
              placeholder="Last Name"
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            {user.body.firstName} {user.body.lastName}
          </>
        )}
      </h1>
        <button onClick={handleEditClick} className="edit-button">Edit Name</button>
    </header>
  );
}
