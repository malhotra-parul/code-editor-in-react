import React,{useState} from 'react'
import { render } from 'react-dom'
import { Container, Wrapper, Sample, Label } from './styles'
import GlobalStyles from "./theme/globalStyles";
import dark from 'prism-react-renderer/themes/nightOwl'
import light from 'prism-react-renderer/themes/duotoneLight'
import { Toggle } from "react-toggle-component";
import Editor from './Editor'

const App = () => {
  const [theme, setTheme] = useState(dark);

  const handleToggle = (e)=>{
    console.log("onToggle", e.target);
    theme === dark ? setTheme(light) : setTheme(dark);
  }

  return(

  <Container>
  <GlobalStyles />
  <h1>Code.in</h1>
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
}

render(<App />, document.getElementById('root'))
