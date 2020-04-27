import React, { Fragment } from "react";
import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";

const EditorExample = ({ theme, font, value, onChange, exampleCode }) => {


  const styles = {
      fontSize: font,
      boxSizing: "border-box",
      minHeight: "530px",
      width: "100%",
      resize: "none",
      overflowY: "auto",
      fontFamily: '"Dank Mono", "Fira Code", monospace',
      boxShadow: "0px 0px 18px 8px rgba(113,130,88,0.63)",
      border: "2px solid #f6f8fa",
      ...theme.plain,
      outline: "none"
  };

  const highlight = (code) => (
    <Highlight {...defaultProps} theme={theme} code={value} language="js">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
          
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => {
         
                return <span {...getTokenProps({ token, key })} />
          })}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  );

  return (
    <Editor
      value={value}
      onValueChange={(value)=>onChange(value)}
      highlight={highlight}
      padding={30}
      style={styles}
    />
  );
};
export default EditorExample;
