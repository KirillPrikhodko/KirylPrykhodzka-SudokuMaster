import React from "react";
import SudokuField from "../components/SudokuField/SudokuField";
import "./SudokuMasterPage.css";

const SudokuMasterPage = () => {
  return (
    <div className="sudoku-master-page">
      <SudokuField />
    </div>
  );
};

export default SudokuMasterPage;
