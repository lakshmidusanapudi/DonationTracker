import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/HomePage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const handleAdminRegister = () => {
    navigate('/RegisterAdmin'); 
  };

  const handleComitteMemberRegister = () => {
    navigate('/ComitteMember'); // Navigate to AddComitteMember page
  };

  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-heading">Donation Tracker</h1>
        <div className="navbar-buttons">
          <button className="btn" onClick={handleAdminRegister}>Admin Register</button>
          <button className="btn" onClick={handleComitteMemberRegister}>Comitte Member Register</button>
        </div>
      </nav>

      <div className="content">
        <h2>Welcome to the Home Page!</h2>
        <p>This is a simple homepage with a navigation bar.</p>
      </div>
    </div>
  );
};

export default Homepage;
