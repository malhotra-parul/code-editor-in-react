import React, { useState, useEffect, useCallback } from "react";
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
  SelectLang
} from "./styles";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";
import GlobalStyles from "./theme/globalStyles";
import Header from "./components/Header";
import { ControlledEditor, monaco } from "@monaco-editor/react";
import YourIp from "./components/YourIP";
import Font from "./fonts/fonts";
import FullScreen from "react-full-screen";
import axios from "axios";
import Modal from "./components/Modal";
import Upload from "./components/Upload.js";
import Output from "./components/Output";
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
library.add(faSave, faTextHeight, faCompress, faSync, faDownload, faFont, faCompress);
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
    localStorage.getItem("code") || "//type your javascript code here"
  );
  const [js, setJs] = useState(
    localStorage.getItem("js") || "//type your javascript code here"
  );
  const [py, setPy] = useState(
    localStorage.getItem("python") || "#type your python code here"
  );
  const [ruby, setRuby] = useState(
    localStorage.getItem("ruby") || "#type your ruby code here"
  );
  const [shell, setShell] = useState(
    localStorage.getItem("shell") || "#type your shell script here"
  );
  const [autosave, setAutosave] = useState("Saved.");
  const [theme, setTheme] = useState("light");
  const [isReset, setIsReset] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fontSize, setFontSize] = useState(
    Number(localStorage.getItem("fontSize")) || 16
  );
  const [isCompiled, setIsCompiled] = useState(false);
  const [output, setOutput] = useState(false);
  const [loadingOutput, setLoadingOutput] = useState(false);
  const [outputResponse, setOutputResponse] = useState(null);
  const [commandLineArgs, setCommandLineArgs] = useState(false);
  const [commandLineInput, setcommandLineInput] = useState("");
  const [lang, setLang] = useState(localStorage.getItem("lang") || "javascript");
  const [isEditorReady, setIsEditorReady] = useState(false);
  const timer = null;
  const [line, setLine] = useState("");
  const [column, setColumn] = useState("");
  const [gofull, setGoFull] = useState(false);
  const [width, setWidth] = useState("80vw");
  const [height, setHeight] = useState("55vh");
  let extension;
  if(lang === "javascript") extension="js";
  if(lang === "python") extension="py";
  if(lang === "ruby") extension="rb";
  if(lang === "shell") extension="sh"


  const onChange = (e, newValue) => {
    setCode(newValue);
    setAutosave('Saving ...');
		setTimeout(() => {
			setAutosave('Saved');
		}, 2000);
  
    // setAutosave("Saved");
  };

  const resetTimeout = (id, newId)=>{
    clearTimeout(id);
    return newId;
    };
    
    const onSave = useCallback(()=>{
    
      if(lang === "javascript"){
        setJs(code);
      }else if(lang === "python"){
        setPy(code);
      }else if(lang === "ruby"){
        setRuby(code);
      }else if(lang === "shell"){
        setShell(code);
      }
    }, [code, lang]);
    
    useEffect(()=>{
    resetTimeout(timer, setTimeout(()=>{
    onSave()
    }, 10))
    }, [timer, onSave]);

    useEffect(() => {
    localStorage.setItem("code", code);
    localStorage.setItem("py", py);
    localStorage.setItem("js", js);
    localStorage.setItem("ruby", ruby);
    localStorage.setItem("lang", lang);
    localStorage.setItem("shell", shell);
  }, [code, py, js, ruby, shell, lang]);

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

    if (lang === "javascript") {
      console.log("handleDelete - js");
      setCode("//Type your javascript code here");
      setJs("//Type your javascript code here");
    } else if (lang === "python") {
      console.log("handleDelete - py");
      setCode("#Type your python code here");
      setPy("#Type your python code here");
    }else if (lang === "ruby") {
      console.log("handleDelete - ruby");
      setCode("#Type your Ruby code here");
      setRuby("#Type your Ruby code here");
    }else if (lang === "shell") {
      console.log("handleDelete - shell");
      setCode("#Type your Shell code here");
      setShell("#Type your Shell code here");
    }
  };

  const downloadFile = () => {
    let currentCode ;
    if(lang === "javascript") currentCode = js;
    if(lang === "python") currentCode = py;
    if(lang === "ruby") currentCode = ruby;
    if(lang === "shell") currentCode = shell;
    fileDownload(currentCode, `myCode.${extension}`);
    console.log(currentCode);
  };

  const monacoEditor = monaco.init();

  const onLoad = (monaco, editor) => {
    setIsEditorReady(true);

    editor.onDidChangeCursorPosition((e) => {
      const position = e.position;
      const { lineNumber, column } = position;
      setLine(lineNumber);
      setColumn(column);
      console.log(lineNumber, column);
    });

    monacoEditor
      .then((monaco) => {
        editor.addCommand(
          monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S,
          function () {
            alert("Your code has been Autosaved.");
          }
        );
        editor.addCommand(
          monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D,
          function () {
            alert("Click on Download button to download");
          }
        );
      })
      .catch((err) => console.log(err));
  };

  const handleLanguageChange = (e) => {
    setLang(e.target.value);
    if (e.target.value === "javascript"){
      if(code !== js){
        setCode(js);
      } else{
          setCode("//Enter you code in js");
        }
      }
    if (e.target.value === "python"){
        if(code !== py){
          setCode(py);
        } else{
            setCode("#Enter you code in py");
          }
        }
    if (e.target.value === "ruby"){
          if(code !== ruby){
            setCode(ruby);
          } else{
              setCode("#Enter you code in rb");
            }
          }
    if (e.target.value === "shell"){
            if(code !== shell){
              setCode(shell);
            } else{
                setCode("#Enter you code in sh");
              }
            }
  };

  const goFullScreen = ()=>{
    console.log("full screen!");
    setGoFull(true);
    setWidth("100vw");
    setHeight("100vh");
  };

  const handleFullScreen = (gofull)=>{
    setGoFull(gofull);
    setWidth("80vw");
    setHeight("60vh");  
  };

  const input = {
    
    // "code" : code.split("/n")[0],
    code: code,
    lang: extension,
    cInputValue: commandLineInput,
  };

  const compileCode = () => {
    setLoadingOutput(true);
    let endpoint;
    if(lang === "javascript") endpoint="js";
    if(lang === "python") endpoint="py3";
    if(lang === "ruby") endpoint="ruby";
    if(lang === "shell") endpoint="bash";
    setIsCompiled(true);
    
    axios
      .post(
        `https://compiler.code.in/${endpoint}`,
        input
      )
      .then((res) => {
        setOutputResponse(res.data);
        setIsCompiled(false);
        setLoadingOutput(false);
        setOutput(true);
      });
  };

  const handleFile = (file) => {
    var encoded = file.base64[0].split("base64,")[1];
    var content = base64.decode(encoded);
    setCode(content);
    if (lang === "python") {
      setPy(content);
    } else if (lang === "javascript") {
      setJs(content);
    } else if (lang === "ruby") {
      setRuby(content);
    } else if (lang === "shell") {
      setShell(content);
    }
  };

  const handleClose = () => {
    setOutput(false);
  };

  const override = css`
  display: block;
  margin: 0 auto;
  padding: 20px;

`;

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
            <span style={{padding: "0 10px" }}>
              {autosave}
            </span>
            <span>
              <FontAwesomeIcon
                icon={faTextHeight}
                onClick={onFontInc}
                color="green"
                size="lg"
                title="Change Font Size"
                style={{ padding: "10px", cursor: "pointer" }}
              />{" "}
            </span>
            <span>
            <FontAwesomeIcon
              icon={faCompress}
              onClick={goFullScreen}
              color="green"
              size="lg"
              title="Switch to Full Screen mode"
              style={{ padding: "10px" , cursor: "pointer" }}
            />{" "}
          </span>
            <span>
              <FontAwesomeIcon
                icon={faSync}
                color="green"
                size="lg"
                title="Reset Code"
                style={{ padding: "10px" , cursor: "pointer"}}
                onClick={handleReset}
              />
            </span>
            <span>
              <SelectLang value={lang} disabled={!isEditorReady} onChange={handleLanguageChange}>
                <option value="javascript">Javascript(Node)</option>
                <option value="python">Python 3</option>
                <option value="ruby">Ruby</option>
                <option value="shell">Bash</option>
              </SelectLang>
            </span>
          </Sample>
        </Toolbar>
        <Wrapper>
          <FullScreen enabled={gofull} onChange={handleFullScreen}>
          <ControlledEditor
            height={height}
            width={width}
            theme={theme}
            onChange={onChange}
            value={code}
            language={lang}
            editorDidMount={onLoad}
            loading="Initializing the Editor..."
            options={{
              fontSize: fontSize,
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
          </FullScreen>
        </Wrapper>
        <Toolbar>
          <Sample>
            <span style={{padding: "0 10px" }}>
              Line: {line}
            </span>
            <span style={{padding: "0 10px"}}>
              Column: {column}
            </span>
            <span>
              <FontAwesomeIcon
                icon={faDownload}
                color="green"
                size="lg"
                title="Download File"
                style={{ padding: "0 10px" , cursor: "pointer" }}
                onClick={downloadFile}
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faFont}
                color="green"
                size="lg"
                title="Download File"
                style={{ padding: "0 10px" , cursor: "pointer"}}
              />
              :{fontSize}
            </span>
            <YourIp />
          </Sample>
        </Toolbar>
      </IDEWrapper>
      <ModifiedWrapper>
        <Upload handleFile={handleFile} language={lang} />
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
    { loadingOutput &&
     <BounceLoader
      css={override}
      size={70}
      color={"green"}
      loading={loadingOutput}
    />
    }
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
      <Copyright>© Parul Malhotra</Copyright>
    </Container>
  );
};

export default App;
