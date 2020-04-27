import React from "react";
import "./newEditor.styles.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";



const NewEditor = ({ theme, font, value, onChange })=>{
    
    const hightlightWithLineNumbers = (input, language) =>
  highlight(input, language)
    .split("\n")
    .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .join("\n");

  return (
    <Editor
      value={value}
      onValueChange={value => onChange(value)}
      highlight={code => hightlightWithLineNumbers(code, languages.js)}
      padding={10}
      textareaId="codeArea"
      className={`editor ${theme === "light" ? "light" : "dark"}`}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: font,
        minHeight: "500px",
        overflow:"scroll"
      }}
    />
  );
}

export default NewEditor;
