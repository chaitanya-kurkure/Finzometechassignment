import React, { useState } from "react";
import "../App.css";

const Edit = ({ rowData, updateRow, closeModal }) => {
  const [editedData, setEditedData] = useState({ ...rowData });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const handleInputChange = (field, value) => {
    setEditedData({ ...editedData, [field]: value });
    setFormErrors({ ...formErrors, [field]: "" });
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!editedData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!editedData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editedData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!editedData.contact.trim()) {
      newErrors.contact = "Contact is required";
      valid = false;
    } else if (!/^[0-9]{10}$/.test(editedData.contact)) {
      newErrors.contact = "Invalid contact number";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (validateForm()) {
      updateRow(editedData);
      closeModal();
    }
  };

  return (
    <form className="container">
      <label>
        Name: <span style={{ color: "red" }}>{formErrors.name}</span>{" "}
        <input
          type="text"
          value={editedData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
       
      </label>
      <br />

      <label>
        Email:<span style={{ color: "red" }}>{formErrors.email}</span>{" "}
        <input
          type="email"
          value={editedData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        
      </label>
      <br />

      <label>
        Contact:<span style={{ color: "red" }}>{formErrors.contact}</span>{" "}
        <input
          type="text"
          value={editedData.contact}
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
            checked={editedData.weekday === "Monday"}
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
            checked={editedData.weekday === "Tuesday"}
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
            checked={editedData.weekday === "Wednesday"}
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
            checked={editedData.weekday === "Thursday"}
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
            checked={editedData.weekday === "Friday"}
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
            checked={editedData.gender === "Male"}
            onChange={() => handleInputChange("gender", "Male")}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={editedData.gender === "Female"}
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
          value={editedData.dob}
          onChange={(e) => handleInputChange("dob", e.target.value)}
        />
      </label>
      <br />
      <br />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={closeModal}>Cancel</button>
    </form>
  );
};

export default Edit;
