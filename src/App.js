import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Sample,
  ToggleInput,
  IDEWrapper,
  Toolbar
} from "./styles";
import GlobalStyles from "./theme/globalStyles";
import dark from "prism-react-renderer/themes/nightOwl";
import light from "prism-react-renderer/themes/duotoneLight";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Button from "./components/Button";
import YourIp from "./components/YourIP";
import Font from "./fonts/fonts";

const App = () => {
  const [theme, setTheme] = useState(light);

  //   const [isCompiled, setIsCompiled] = useState(false);

  const handleToggle = (e) => {
    console.log("onToggle", e.target);
    theme === dark ? setTheme(light) : setTheme(dark);
  };

  return (
    <Container>
      <GlobalStyles />
      <Font />
      <Header />
      <IDEWrapper>
        <Toolbar>
          <Sample>
          <ToggleInput type="checkbox" onChange={handleToggle} />
          </Sample>
          <Sample>
            <span>Autosave: </span>
            <span>IncFontSize:  </span>
            <span>FullScreen:  </span>
            <span>ResetCode:  </span>
            <span>SelectLanguage: </span>
          </Sample>
        </Toolbar>
        <Wrapper>
          <Editor theme={theme} />
        </Wrapper>
        <Toolbar>
          <div>
            <span>DownloadFile </span>
            <span>line: </span>
            <span>Column: </span>
            <span>FontSize </span>
            <YourIp />
          </div>
          <Button />
        </Toolbar>
      </IDEWrapper>
    </Container>
  );
};

export default App;
