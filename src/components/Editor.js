import React, { Fragment } from "react";

import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";

const EditorExample = ({ theme, font, value, onChange }) => {

  const styles = {
    root: {
      fontSize: font,
      boxSizing: "border-box",
      height: "550px",
      width: "auto",
      fontFamily: '"Dank Mono", "Fira Code", monospace',
      boxShadow: "0px 0px 18px 8px rgba(113,130,88,0.63)",
      border: "1px dotted #243020",
      ...theme.plain,
    },
  };

  const highlight = (code) => (
    <Highlight {...defaultProps} theme={theme} code={value} language="js">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
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
      padding={10}
      style={styles.root}
    />
  );
};
export default EditorExample;
