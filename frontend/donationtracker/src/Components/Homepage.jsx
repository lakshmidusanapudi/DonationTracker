import React from 'react';
import "../Styles/HomePage.css"

const Homepage = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-heading">Donation Tracker</h1>
        <div className="navbar-buttons">
          <button className="btn">Admin Register</button>
          <button className="btn">Comitte Member Resgister</button>
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
