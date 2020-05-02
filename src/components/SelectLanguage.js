import React from "react";
import { SelectLang } from "../styles";

const SelectLanguage = ({language, handleLangChange}) => {
    
    const handleLanguageChange = (e)=>{
        handleLangChange(e.target.value);
    }
    return ( 
        <SelectLang value={language} onChange={handleLanguageChange}>
            <option value="js">Javascript(Node)</option>
            <option value="py3">Python 3</option>
            <option value="py2">Python 2.7</option>
        </SelectLang>
     );
}
 
export default SelectLanguage;