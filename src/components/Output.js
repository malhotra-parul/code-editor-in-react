import React from "react";
import { IDEWrapper } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add( faTimesCircle );

const Output = ({handleClose}) => {

    const handleClick = ()=>{
        handleClose();
    };

  return (
    <IDEWrapper>
      <div>
        <span>Status : </span>
        <span>Date : </span>
        <span>Time : </span>
        <span>Memory : </span>
        <span>
            <FontAwesomeIcon icon={ faTimesCircle } size="2x" color="green" onClick={handleClick}/>
        </span>
      </div>
      <div>
        <h3>Output</h3>
        <textarea rows="5" readOnly></textarea>
      </div>
    </IDEWrapper>
  );
};

export default Output;
