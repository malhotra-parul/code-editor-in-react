import React from "react";
import { StyledButton } from "../styles";
import ReactFileReader from "react-file-reader";

const Upload = ({ handleFile, language }) => {
  const handleFiles = (file) => {
    handleFile(file);
  };
  
  const filetype = (language === "javascript") ? "js" : "py";

  return (
    <ReactFileReader
      handleFiles={handleFiles}
      base64={true}
      fileTypes={`.${filetype}`}
      multipleFiles={true}
    >
      <StyledButton>Upload</StyledButton>
    </ReactFileReader>
  );
};

export default Upload;
