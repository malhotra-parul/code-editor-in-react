import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Sample,
  ToggleInput,
  IDEWrapper,
  Toolbar,
} from "./styles";
import GlobalStyles from "./theme/globalStyles";
import dark from "prism-react-renderer/themes/nightOwl";
import light from "prism-react-renderer/themes/duotoneLight";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Button from "./components/Button";
import YourIp from "./components/YourIP";
import Font from "./fonts/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faTextHeight, faCompress, faSync, faDownload, faFont } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faSave, faTextHeight, faCompress, faSync, faDownload, faFont);

const App = () => {
  const [theme, setTheme] = useState(light);
  const [fontSize, setFontSize] = useState(
    Number(localStorage.getItem("fontSize")) || 14
  );

  useEffect(() => {
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  const handleToggle = (e) => {
    theme === dark ? setTheme(light) : setTheme(dark);
  };

  const onFontInc = () => {
    fontSize === 26 ? setFontSize(14) : setFontSize(fontSize + 2);
  };

  return (
    <Container>
      <GlobalStyles />
      <Font />
      <Header />
      <IDEWrapper>
        <Toolbar>
          <Sample>
            <ToggleInput
              type="checkbox"
              onChange={handleToggle}
              title="Change Theme"
            />
          </Sample>
          <Sample>
            <span>
              <FontAwesomeIcon
                icon={faSave}
                color="green"
                size="2x"
                title="Autosaved"
                style={{ padding: "10px" }}
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faTextHeight}
                onClick={onFontInc}
                color="green"
                size="2x"
                title="Change Font Size"
                style={{ padding: "10px" }}
              />{" "}
            </span>
            <span><FontAwesomeIcon
                    icon={faCompress}
                    color="green"
                    size="2x"
                    title="FullScreen"
                    style={{ padding: "10px" }}
                   /></span>
            <span><FontAwesomeIcon
                    icon={faSync}
                    color="green"
                    size="2x"
                    title="Reset Code"
                    style={{ padding: "10px" }}
                /></span>
            <span>SelectLanguage: </span>
          </Sample>
        </Toolbar>
        <Wrapper>
          <Editor theme={theme} font={fontSize} />
        </Wrapper>
        <Toolbar>
          <Sample>
            <span><FontAwesomeIcon
                        icon={faDownload}
                        color="green"
                        size="2x"
                        title="Download File"
                        style={{ padding: "0 10px" }}
                    /></span>
            <span>Line: </span>
            <span>Char: </span>
            <span><FontAwesomeIcon
                        icon={faFont}
                        color="green"
                        size="2x"
                        title="Download File"
                        style={{ padding: "0 10px"}}
                    />:{fontSize}</span>
            <YourIp />
          </Sample>
          <Sample>
            <Button />
          </Sample>
        </Toolbar>
      </IDEWrapper>
    </Container>
  );
};

export default App;
