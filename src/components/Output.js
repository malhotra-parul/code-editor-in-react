import React from "react";
import {
  IDEWrapper,
  OutputHeader,
  OutputBody,
  TextArea,
  Values
} from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faTimesCircle);

const Output = ({ handleClose, outputResponse }) => {
  const { err, memory, statuscode, stderr, stdout, time } = outputResponse;

  const handleClick = () => {
    handleClose();
  };

  return (
    <IDEWrapper>
      <OutputHeader>
        <span>
          Status:{" "}
          <Values>
            {statuscode === 0
              ? "Compilation Success"
              : statuscode === 1
              ? "Compilation Failed"
              : null}
          </Values>
        </span>
        <span>
          Date: <Values>{new Date().toUTCString()}</Values>
        </span>
        <span>
          Time: <Values>{time ? `${time} ms` : null}</Values>
        </span>
        <span>
          Memory: <Values>{memory ? memory : null}</Values>
        </span>
        <span>
          <FontAwesomeIcon
            icon={faTimesCircle}
            size="2x"
            color="green"
            onClick={handleClick}
            style={{cursor: "pointer"}}
          />
        </span>
      </OutputHeader>
      <OutputBody>
        <h3>Output</h3>
        <TextArea rows="5" readOnly value={stdout} />
      </OutputBody>
      { stderr ? <OutputBody>
        <h3>Error</h3>
        <TextArea error rows="5" readOnly value={stderr} />    
      </OutputBody>:
      err.signal ? 
      <OutputBody>
      <h3>RunTime Error</h3>
      <TextArea error rows="5" readOnly value={err.signal} />    
    </OutputBody>: 
    null}
    </IDEWrapper>
  );
};

export default Output;
