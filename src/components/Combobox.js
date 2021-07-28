import React, { useState } from "react";
import "./combobox.css";
import img1 from "./flags/india_flag.jpg";
import img2 from "./flags/uk-flag.png";
import img3 from "./flags/us-flag.jpg";

export const Combobox = () => {
  const initialState = [
    {
      id: 1,
      country: "IND",
      code: "+91",
      flag: img1,
    },
    { id: 2, country: "USA", code: "+1", flag: img3 },
    { id: 3, country: "ENG", code: "+41", flag: img2 },
  ];
  const [data, setData] = useState(initialState);
  const [country, setCountry] = useState({
    id: 2,
    country: "USA",
    code: "+1",
    flag: img3,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="combo-wrapper">
      <div className="country-phone-wrapper">
        <div className="country-container">
          <div className="country-selected" tabIndex="0">
            {/* <div>{country.code}</div> */}

            <img src={country.flag} alt="not found" width="30px" />
            <div>{country.country}</div>
          </div>
          <div className="dropdown">
            {data.map((item) => {
              return (
                <div
                  className="combo-container"
                  onClick={() => {
                    setCountry(item);
                  }}
                >
                  <div>{item.code}</div>
                  <div>{item.country} </div>

                  <img src={item.flag} alt="not found" width="30px" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="input-container">
          <span>{country.code}</span>
          <input
            type="text"
            placeholder="Add phone number"
            className="input-phone-styling"
          />
        </div>
      </div>
      {/* <input type="submit" value="Submit" className="input-submit" /> */}
      {/* </div> */}
      {/* {data.map((item) => {
        return (
          <div className="combo-container">
            <div>{item.code}</div>
            <div>{item.country} </div>

            <img src={item.flag} alt="not found" width="30px" /> */}
      {/* <img src={img1} alt="not found" width="30px" />}
        </div> 
       ); })} 
      {/* <form onSubmit={handleSubmit}>
        {/* <label>Ph.No:</label> */}
      {/* <input
          type="text"
          className="input-country-styling"
          placeholder="country"
        /> */}
      {/* <div className="country-container"></div>

        <input
          type="text"
          placeholder="Add phone number"
          className="input-phone-styling"
        />

        <input type="submit" value="Submit" className="input-submit" />
      </form> */}
    </div>
  );
};
