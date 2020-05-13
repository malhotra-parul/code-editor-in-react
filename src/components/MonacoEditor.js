import React from "react";
import { ControlledEditor } from "@monaco-editor/react";


const MonacoEditor = ({value, onEditorChange, lang, font, theme, onLoad}) => {

    const onChangeEditor = (event, value)=>{
        
        
        onEditorChange(value);
    }

    const handleEditorMount = () =>{
        console.log("editor mounted");
        onLoad();
    }
    
    console.log(lang);
    return (
        
        <ControlledEditor
            height="64vh"
            width="80vw"
            theme={theme}
            onChange={onChangeEditor}
            value={value}
            language={lang}
            editorDidMount={handleEditorMount}
            options={{
              fontSize: font,
              smoothScrolling: true,
              scrollbar: {
                vertical: "visible",
                horizontal: "visible",
                verticalScrollbarSize: 17,
                horizontalScrollbarSize: 17,
                verticalHasArrows: true,
                horizontalHasArrows: true,
              },
            }}
          />
      );
}
 
export default MonacoEditor;