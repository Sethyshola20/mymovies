import React from "react";
import {UserAuth} from '../context/Authcontext';
import { useNavigate } from "react-router-dom"
import Sidebar from "./Sidebar";


export default function Profile() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="main-page">
      <Sidebar />
      <div className='content'>
        <h1 className='main-heading'>Profile</h1>
        <p className="user-email">Email: {user && user.email}</p>
        <button onClick={handleLogout} className='logout-btn'>
          Logout
        </button>
      </div>
    </div>
  );
};