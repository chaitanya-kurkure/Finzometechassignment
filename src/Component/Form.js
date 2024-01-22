import React, { useState } from "react";
import "../App.css";

const Formadd = ({ addRow, sno }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    weekday: false,
    gender: "",
    dob: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setFormErrors({ ...formErrors, [field]: "" });
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact is required";
      valid = false;
    } else if (!/^[0-9]{10}$/.test(formData.contact)) {
      newErrors.contact = "Invalid contact number";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addRow({ sno, ...formData });
      setFormData({
        name: "",
        email: "",
        contact: "",
        weekday: false,
        gender: "",
        dob: "",
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} class="container">
        <label>
          Name: <span style={{ color: "red" }}>{formErrors.name}</span>{" "}
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </label>
        <br />

        <label>
          Email: <span style={{ color: "red" }}>{formErrors.email}</span>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </label>

        <br />
        <label>
          Contact: <span style={{ color: "red" }}>{formErrors.contact}</span>
          <input
            type="text"
            value={formData.contact}
            onChange={(e) => handleInputChange("contact", e.target.value)}
          />
        </label>
        <br />

        <label>
          Weekday :<br />
          <label>
            <input
              type="checkbox"
              name="weekday"
              value="Monday"
              checked={formData.weekday === "Monday"}
              onChange={() => handleInputChange("weekday", "Monday")}
            />
            Monday
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="weekday"
              value="Tuesday"
              checked={formData.weekday === "Tuesday"}
              onChange={() => handleInputChange("weekday", "Tuesday")}
            />
            Tuesday
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="weekday"
              value="Wednesday"
              checked={formData.weekday === "Wednesday"}
              onChange={() => handleInputChange("weekday", "Wednesday")}
            />
            Wednesday
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="weekday"
              value="Thursday"
              checked={formData.weekday === "Thursday"}
              onChange={() => handleInputChange("weekday", "Thursday")}
            />
            Thursday
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="weekday"
              value="Friday"
              checked={formData.weekday === "Friday"}
              onChange={() => handleInputChange("weekday", "Friday")}
            />
            Friday
          </label>
          <br />
        </label>

        <br />

        <label>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={() => handleInputChange("gender", "Male")}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={() => handleInputChange("gender", "Female")}
            />
            Female
          </label>
        </label>
        <br />
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            value={formData.dob}
            onChange={(e) => handleInputChange("dob", e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formadd;
