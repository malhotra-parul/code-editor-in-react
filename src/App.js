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
  const [code, setCode] = useState(
    localStorage.getItem("myCode") || "//Write your Javascript code here!"
  );
  const [js, setJs] = useState(
    localStorage.getItem("js") || "//Write your Javascript code here!"
  );
  const [py, setPy] = useState(
    localStorage.getItem("py") || "#Write your Python code here!"
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
  const [commandLineArgs, setCommandLineArgs] = useState(false);
  const [commandLineInput, setcommandLineInput] = useState("");
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "js");

  useEffect(() => {
    localStorage.setItem("myCode", code);
    localStorage.setItem("py", py);
    localStorage.setItem("js", js);
    localStorage.setItem("lang", language)
  }, [code, py, js, language]);


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
    setOutput(false);

    if (language === "js") {
      setCode("//Type your javascript code here");
      setJs("//Type your javascript code here");
    } else if (language === "py3" || language === "py2") {
      setCode("#Type your python code here");
      setPy("#Type your python code here");
    }
  };
  const downloadFile = () => {
    fileDownload(code, `myCode.${language === "js" ? "js" : "py"}`);
  };

  const onEditorChange = (x) => {
    setCode(x);
    if (language === "py3") {
      setPy(x);
    } else if (language === "js") {
      setJs(x);
    } else if (language === "py2") {
      setPy(x);
    }
  };
  const handleLangChange = (lang) => {
    setLanguage(lang);
    if (lang === "js") {
      if (code !== js) {
        setCode(js);
      } else {
        setCode("//type your javascript code here");
      }
    } else if (lang === "py3" || lang === "py2") {
      if (code !== py) {
        setCode(py);
      } else {
        setCode("#type your python code here");
      }
    }
  };

  const input = {
    // "code" : code.split("/n")[0],
    code: code,
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
    setCode(content);
    if (language === "py3") {
      setPy(content);
    } else if (language === "js") {
      setJs(content);
    } else if (language === "py2") {
      setPy(content);
    }
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
            value={code}
            lang={language}
            onChange={onEditorChange}
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
