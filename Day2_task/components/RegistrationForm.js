import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    skills: [],
    country: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        if (checked) {
          return { ...prev, skills: [...prev.skills, value] };
        } else {
          return {
            ...prev,
            skills: prev.skills.filter((skill) => skill !== value)
          };
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}/>

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}/>

        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}/> Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}/> Female

        <label>Skills:</label>
        <input
          type="checkbox"
          name="skills"
          value="React"
          onChange={handleChange} /> React
        <input
          type="checkbox"
          name="skills"
          value="Node"
          onChange={handleChange}/> Node
        <input
          type="checkbox"
          name="skills"
          value="Java"
          onChange={handleChange}/> Java

        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </form>

      <div className="output">
        <h3>Entered Data:</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Password:</strong> {formData.password}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Skills:</strong> {formData.skills.join(", ")}</p>
        <p><strong>Country:</strong> {formData.country}</p>
      </div>
    </div>
  );
};

export default RegistrationForm;
