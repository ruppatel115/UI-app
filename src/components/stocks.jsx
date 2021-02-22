import React from "react";


export const Stocks = props => {
  return (
    <>
      <div className="stock-container">Welcome to Stock Tracker</div>


      <input
      type="text"
      className="form-control"
      placeholder="Enter Stock Name"
      autoComplete="off"
    />
    </>
  );
};

export default Stocks;