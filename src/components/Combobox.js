import React, { useState } from "react";
import "./combobox.css";
import img1 from "./flags/india_flag.jpg";

export const Combobox = () => {
  const initialState = [
    {
      id: 1,
      country: "India",
      code: "+91",
      flag: img1,
    },
    { id: 2, country: "USA", code: "+1", flag: img1 },
    { id: 3, country: "UK", code: "+41", flag: img1 },
  ];
  const [data, setData] = useState(initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="combo-wrapper">
      <form onSubmit={handleSubmit}>
        <label>Ph.No:</label>
        <input
          type="text"
          className="input-country-styling"
          placeholder="country"
        />

        <input
          type="text"
          placeholder="Add phone number"
          className="input-phone-styling"
        />

        <input type="submit" value="Submit" className="input-submit" />
      </form>
      {data.map((item) => {
        return (
          <div className="combo-container">
            <div>{item.code}</div>
            <div>{item.country} </div>

            <img src={item.flag} alt="not found" width="30px" />
            {/* <img src={img1} alt="not found" width="30px" /> */}
          </div>
        );
      })}
    </div>
  );
};
