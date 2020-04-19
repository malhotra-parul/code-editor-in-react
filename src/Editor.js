import React, { Fragment, useState } from 'react'

import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`

const EditorExample = (props)=> {

    const [code, setCode] = useState(exampleCode);

  const onValueChange = code => {
    setCode(code);
  }

  const styles = {
    root: {
      boxSizing: 'border-box',
      height: "550px",
      width: "50em",
      fontFamily: '"Dank Mono", "Fira Code", monospace',
      boxShadow: "0px 0px 18px 8px rgba(113,130,88,0.63)",
      border: "1px dotted #243020",
      ...props.theme.plain
    }
  }

  const highlight = code => (
    <Highlight {...defaultProps} theme={props.theme} code={code} language="js">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  )


    return (
      <Editor
        value={code}
        onValueChange={onValueChange}
        highlight={highlight}
        padding={10}
        style={styles.root}
      />
    )
};
export default EditorExample
