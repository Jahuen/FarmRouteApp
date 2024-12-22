import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <button className="menu-button" onClick={toggleMenu}>
          &#9776;
        </button>
        <h1 className="title">Farm Route</h1>
        <button className="favorite-button">❤</button>
      </div>

      {/* Map Area */}
      <div className="map">
        <p>Map Placeholder</p>
      </div>

      {/* Footer Navigation */}
      <footer className="footer">
        <button className="footer-button">
          <span>Profile</span>
        </button>
        <button className="footer-button">
          <span>Buy</span>
        </button>
        <button className="footer-button">
          <span>Sell</span>
        </button>
        <button className="footer-button search-button">
          <span>Search</span>
        </button>
      </footer>

      {/* Side Menu and Overlay */}
      {menuOpen && (
        <>
          <div className="overlay" onClick={closeMenu}></div>
          <div className="menu">
            <div className="menu-header">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="user-avatar"
              />
              <div>
                <h2>John Doe</h2>
                <p>name@gmail.com</p>
              </div>
            </div>
            <ul className="menu-list">
              <li>Planting Tips</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Logout</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
