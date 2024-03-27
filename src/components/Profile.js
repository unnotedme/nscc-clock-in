// Profile.js
import React, { useState } from 'react';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    schedule: 'Monday - Friday, 9:00 AM - 5:00 PM',
    preferences: 'None',
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to update user information
    console.log('User information updated:', userInfo);
  };

  return (
    <div>
      <h2>Profile Management</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Schedule:
          <input
            type="text"
            name="schedule"
            value={userInfo.schedule}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Preferences:
          <input
            type="text"
            name="preferences"
            value={userInfo.preferences}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
