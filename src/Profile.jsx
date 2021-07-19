import React from 'react'
import UserForm from './UserForm'

const Profile = ({ userData, handelChange }) => {
  return (
    <div className="column">
      <UserForm userData={userData} handelChange={handelChange} />
    </div>
  );
};

export default Profile