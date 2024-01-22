import "./App.css";
import React, { useState } from "react";
import Formadd from "./Component/Form";
import Tabe from "./Component/Tabe";
import Edit from "./Component/Edit";


const App = () => {
  const [tableData, setTableData] = useState([]);
  const [sno, setSno] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const addRow = (rowData) => {
    rowData.sno = sno;
    setTableData([...tableData, rowData]);
    setSno(sno + 1);
  };

  const editRow = (row) => {
    setIsEditing(true);
    setSelectedRow(row);
  };

  const updateRow = (updatedData) => {
    const updatedTableData = tableData.map((row) =>{
    if (row.sno !== undefined && row.sno === updatedData.sno) {
      return updatedData;
    }
    return row;
  }
    );
    setTableData(updatedTableData);
    setIsEditing(false);
    setSelectedRow(null);
  };

  const deleteRow = (rowId) => {
    const updatedTableData = tableData.filter((row) => row.sno !== rowId);
    setTableData(updatedTableData);
  };

  const closeModal = () => {
    setIsEditing(false);
    setSelectedRow(null);
  };

  return (
    <div>
      {isEditing ? (
        <Edit
          rowData={selectedRow}
          updateRow={updateRow}
          closeModal={closeModal}
        />
      ) : (
        <Formadd addRow={addRow} sno={sno} />
      )}
      <Tabe data={tableData} editRow={editRow} deleteRow={deleteRow} />
    </div>
  );
};

export default App;
