import React from "react";
import { SelectLang } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SelectLanguage = () => {
    return ( 
        <SelectLang>Javascript(Node.js)<FontAwesomeIcon
        icon={faCaretDown}
        color="green"
        size="1x"
        title="Select Language"
        style={{ padding: "0 10px" }}
        /></SelectLang>
     );
}
 
export default SelectLanguage;