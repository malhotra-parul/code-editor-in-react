import React, { useState } from "react";
import { Container, Wrapper, Sample, Label, IDEWrapper, TopToolbar } from "./styles";
import GlobalStyles from "./theme/globalStyles";
import dark from "prism-react-renderer/themes/nightOwl";
import light from "prism-react-renderer/themes/duotoneLight";
import { Toggle } from "react-toggle-component";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Font from "./fonts/fonts";

const App = () => {
  const [theme, setTheme] = useState(light);

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
        <TopToolbar>
          <Sample>
            <Label htmlFor="toggle-1">
              Light Mode
              </Label>
              <Toggle name="toggle-1" onToggle={handleToggle} /> 
              <Label htmlFor="toggle-1">
              Dark Mode
              </Label>  
          </Sample>
            <Sample>
            <span>Autosave</span>
            <span>Inc FontSize</span>
            <span>Reset Code</span>
            <span>Select language</span>
            </Sample>
          </TopToolbar>
        <Wrapper>
          <Editor theme={theme} />
        </Wrapper>
        <div>Bottom toolbar</div>
      </IDEWrapper>
    </Container>
  );
};

export default App;
