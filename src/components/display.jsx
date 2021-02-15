import React from "react";
import { getIpData } from "../ipApi";

export const Display = () => {
  const handleButtonClick = async () => {
    const ipData = await getIpData();
    console.log(ipData);
  };
  return (
    <div className="display">
      <h1>Google Maps</h1>
      <button onClick={() => handleButtonClick()}>Find Location</button>
    </div>
  );
};
