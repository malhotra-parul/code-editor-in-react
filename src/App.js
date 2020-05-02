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
  Copyright,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  TextArea,
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

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

const App = () => {
  const [jsCode, setJsCode] = useState(
    localStorage.getItem("jsCode") || `/* type your js code here */`
  );
  const [pyCode, setPyCode] = useState(
    localStorage.getItem("pyCode") || `#type your python code here`
  );

  // const [code, setCode] = useState(
  //   localStorage.getItem("myCode") || exampleCode
  // );
  const [theme, setTheme] = useState("light");
  const [isReset, setIsReset] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fontSize, setFontSize] = useState(
    Number(localStorage.getItem("fontSize")) || 14
  );
  const [isCompiled, setIsCompiled] = useState(false);
  const [output, setOutput] = useState(false);
  const [outputResponse, setOutputResponse] = useState(null);
  const [commandLineArgs, setCommandLineArgs] = useState(false);
  const [commandLineInput, setcommandLineInput] = useState("");
  const [language, setLanguage] = useState("js");

  useEffect(() => {
    localStorage.setItem("jscode", jsCode);
  }, [jsCode]);

  useEffect(() => {
    localStorage.setItem("pycode", pyCode);
  }, [pyCode]);

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
    setOutput(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    setIsModalOpen(false);
    setIsReset(false);
    language === "js"
      ? setJsCode(`/* type your js code here */`)
      : setPyCode(`#type your python code here`);
  };
  const downloadFile = () => {
    fileDownload(
      language === "js" ? jsCode : pyCode,
      `myCode.${language === "js" ? "js" : "py"}`
    );
  };

  const handleLangChange = (lang) => {
    setLanguage(lang);
  };

  const input = {
    // "code" : code.split("/n")[0],
    code: language === "js" ? jsCode : pyCode,
    lang: language === "js" ? "js" : "py",
    cInputValue: commandLineInput,
  };
  const compileCode = () => {
    setIsCompiled(true);
    axios.post(`https://compilerapi.code.in/${language}`, input).then((res) => {
      setOutputResponse(res.data);
      setIsCompiled(false);
      setOutput(true);
    });
  };

  const handleFile = (file) => {
    var encoded = file.base64[0].split("base64,")[1];
    var content = base64.decode(encoded);
    language === "js" ?
    setJsCode(content) :
    setPyCode(content)
  };

  const handleClose = () => {
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
              <SelectLanguage
                language={language}
                handleLangChange={handleLangChange}
              />
            </span>
          </Sample>
        </Toolbar>
        <Wrapper>
          <NewEditor
            theme={theme}
            font={fontSize}
            value={language === "js" ? jsCode : pyCode}
            lang={language}
            onChange={language === "js" ? (x) => setJsCode(x) : (x) => setPyCode(x)}
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
        <Upload handleFile={handleFile} language={language} />
        <div>
          <label>
            <Checkbox
              type="checkbox"
              checked={commandLineArgs}
              onChange={(e) => setCommandLineArgs(!commandLineArgs)}
            />
            <span style={{ color: "green" }}> Command Line Arguments</span>
          </label>
        </div>

        <StyledButton onClick={compileCode}>
          {isCompiled ? "Compiling..." : "Compile"}
        </StyledButton>
      </ModifiedWrapper>
      {commandLineArgs && (
        <IDEWrapper style={{ marginBottom: "40px" }}>
          <TextArea
            rows="5"
            placeholder="Give input seperated by spaces"
            value={commandLineInput}
            onChange={(e) => setcommandLineInput(e.target.value)}
          />
        </IDEWrapper>
      )}
      {output && (
        <Output outputResponse={outputResponse} handleClose={handleClose} />
      )}
      <Copyright>© CODE.IN</Copyright>
    </Container>
  );
};

export default App;
