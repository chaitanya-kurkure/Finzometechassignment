import React from "react";
import "../App.css";
const Tabe = ({ data, editRow, deleteRow }) => {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Weekday</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.sno}>
            <td>{row.sno}</td>
            <td>{row.name}</td>
            <td>{row.contact}</td>
            <td>{row.email}</td>
            <td>{row.weekday}</td>
            <td>{row.gender}</td>
            <td>{row.dob}</td>
            <td>
              <button onClick={() => editRow(row)}>Edit</button>
              <button onClick={() => deleteRow(row.sno)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabe;
