import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faLaptopHouse);

const YourIp = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://api.ipify.org/")
      .then((res) => {
        if (res.status === 200) setData(res.data);
      })
      .catch((err) => {
        setData("Not able to get your ip!");
        throw err;
      });
  }, []);

  return (
    <span>
      <FontAwesomeIcon
        icon={faLaptopHouse}
        color="green"
        size="2x"
        title="Your IP"
        style={{ padding: " 0 10px" }}
      />
      : {data}
    </span>
  );
};

export default YourIp;
