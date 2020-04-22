import React,{useState} from 'react';
import { Container, Wrapper, Sample, Label } from './styles';
import GlobalStyles from "./theme/globalStyles";
import dark from 'prism-react-renderer/themes/nightOwl';
import light from 'prism-react-renderer/themes/duotoneLight';
import { Toggle } from "react-toggle-component";
import Editor from './components/Editor';
import Header from "./components/Header";
import Font from "./fonts/fonts";

const App = () => {
    const [theme, setTheme] = useState(dark);
  
    const handleToggle = (e)=>{
      console.log("onToggle", e.target);
      theme === dark ? setTheme(light) : setTheme(dark);
    }
    return(
    <Container>
    <GlobalStyles />
    <Font />
    <Header />
    <Sample>
    <Label htmlFor="toggle-1">
      Light Mode
      <Toggle
        name="toggle-1"
        onToggle={handleToggle}
      />
    </Label>
  </Sample>    
    <Wrapper>
      <Editor theme={theme}/>
    </Wrapper>
    </Container>
  )
  };

  export default App;