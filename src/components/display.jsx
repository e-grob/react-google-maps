import React, { useEffect, useState } from "react";
import { getIpData } from "../ipApi";

const googleApiKey = "AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk";

export const Display = () => {
  const [ipData, setIpData] = useState([]);

  useEffect(async () => {
    const ipDataResponse = await getIpData();
    setIpData(ipDataResponse);
  }, []);

  return (
    <div className="display">
      <h1>Your Location</h1>
      <hr></hr>
      <h3>
        {ipData.city}, {ipData.country_name}
      </h3>
      <iframe
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=${googleApiKey}
    &q=${ipData.city},${ipData.country_name}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};
