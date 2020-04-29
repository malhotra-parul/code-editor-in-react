import React from "react";
import { StyledButton } from "../styles";
import ReactFileReader from "react-file-reader";


const Upload = ({handleFile}) => {

    const handleFiles = (file)=>{
        handleFile(file)
    };

    return (
        <ReactFileReader handleFiles={handleFiles} base64={true} fileTypes={".js"} multipleFiles={true}>
        <StyledButton>Upload</StyledButton>
        </ReactFileReader>
      );
}
 
export default Upload;
