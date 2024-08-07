import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* Additional user information can be displayed here */}
    </div>
  );
};

export default Profile;
