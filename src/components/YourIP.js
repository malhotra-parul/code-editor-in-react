import React, { useState, useEffect } from "react";
import axios from "axios";

const YourIp = () => {
    const [data, setData] = useState("");
    useEffect(
        ()=>{
           axios.get("https://api.ipify.org/")
           .then((res) => {
               if(res.status === 200) setData(res.data)
        })
           .catch((err) => {
            setData("Not able to get your ip!");
            throw err;
           } )
        }, []     
    )
    console.log(data);
    return ( 
        <span>
        <span style={{color: "green"}}>Your IP: </span> {data}
        </span>
     );
}
 
export default YourIp;