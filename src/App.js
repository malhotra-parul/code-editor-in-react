import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Sample,
  ToggleInput,
  IDEWrapper,
  Toolbar,
  StyledButton,
  ModifiedWrapper,
} from "./styles";
import GlobalStyles from "./theme/globalStyles";
import Header from "./components/Header";
import NewEditor from "./components/newEditor";
import YourIp from "./components/YourIP";
import Font from "./fonts/fonts";
import axios from "axios";
import Modal from "./components/Modal";
import Upload from "./components/Upload.js";
import Output from "./components/Output";
import SelectLanguage from "./components/SelectLanguage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import {
  faTextHeight,
  faCompress,
  faSync,
  faDownload,
  faFont,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faSave, faTextHeight, faCompress, faSync, faDownload, faFont);
var fileDownload = require("js-file-download");
var base64 = require("base-64");

const exampleCode = `
/* type your javascript code here */
`;

const App = () => {
  const [code, setCode] = useState(
    localStorage.getItem("myCode") || exampleCode
  );
  const [theme, setTheme] = useState("light");
  const [isReset, setIsReset] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fontSize, setFontSize] = useState(
    Number(localStorage.getItem("fontSize")) || 14
  );
  const [isCompiled, setIsCompiled] = useState(false);
  const [output, setOutput] = useState(false);
  const [outputResponse, setOutputResponse] = useState(null);

  useEffect(() => {
    localStorage.setItem("myCode", code);
  }, [code]);

  useEffect(() => {
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  const handleToggle = (e) => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const onFontInc = () => {
    fontSize === 26 ? setFontSize(14) : setFontSize(fontSize + 2);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setIsReset(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    setIsModalOpen(false);
    setIsReset(false);
    setCode(exampleCode);
  };
  const downloadFile = () => {
    fileDownload(code, "myCode.js");
  };

  const input = {
    // "code" : code.split("/n")[0],
    code: code,
    lang: "js",
    cInputValue: "",
  };
  const compileCode = () => {
    setIsCompiled(true);
    axios.post("https://compilerapi.code.in/js", input).then((res) => {
      console.log(res.data);
      setOutputResponse(res.data);
      setIsCompiled(false);
      setOutput(true);
    });
  };

  const handleFile = (file) => {
    var encoded = file.base64[0].split("base64,")[1];
    var content = base64.decode(encoded);
    setCode(content);
  };

  const handleClose = ()=>{
      setOutput(false);
  };

  return (
    <Container>
      <GlobalStyles />
      <Font />
      <Header />
      <Modal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
      />
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
                size="lg"
                title="Autosaved"
                style={{ padding: "10px" }}
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faTextHeight}
                onClick={onFontInc}
                color="green"
                size="lg"
                title="Change Font Size"
                style={{ padding: "10px" }}
              />{" "}
            </span>
            <span>
              <FontAwesomeIcon
                icon={faSync}
                color="green"
                size="lg"
                title="Reset Code"
                style={{ padding: "10px" }}
                onClick={handleReset}
              />
            </span>
            <span>
              <SelectLanguage />
            </span>
          </Sample>
        </Toolbar>
        <Wrapper>
          <NewEditor
            theme={theme}
            font={fontSize}
            value={code}
            onChange={(x) => setCode(x)}
          />
        </Wrapper>
        <Toolbar>
          <Sample>
            <span>
              <FontAwesomeIcon
                icon={faDownload}
                color="green"
                size="lg"
                title="Download File"
                style={{ padding: "0 10px" }}
                onClick={downloadFile}
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faFont}
                color="green"
                size="lg"
                title="Download File"
                style={{ padding: "0 10px" }}
              />
              :{fontSize}
            </span>
            <YourIp />
          </Sample>
        </Toolbar>
      </IDEWrapper>
      <ModifiedWrapper>
        <Upload handleFile={handleFile} />
        <label>
          Command Line Arguments: <input type="checkbox" />
        </label>
        <StyledButton onClick={compileCode}>
          {isCompiled ? "Compiling..." : "Compile"}
        </StyledButton>
      </ModifiedWrapper>
      {output && <Output outputResponse={outputResponse} handleClose={handleClose}/>}
    </Container>
  );
};

export default App;

