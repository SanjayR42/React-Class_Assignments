import React from "react";
import "./First.css";

const First = () => {
  return (
    <div className="first-container">
      <h2>Creating the Nursery Page</h2>
      <p>Welcome to the Nursery Landing Page. Choose your location and explore flowers.</p>

      <label htmlFor="location">Select Location: </label>
      <select id="location" className="dropdown">
        <option>Chennai</option>
        <option>Bangalore</option>
        <option>Mumbai</option>
        <option>Delhi</option>
      </select>

      <h3>Available Flowers:</h3>
      <ul className="flower-list">
        <li>Rose</li>
        <li>Lily</li>
        <li>Tulip</li>
        <li>Sunflower</li>
        <li>Jasmine</li>
      </ul>
    </div>
  );
};

export default First;
