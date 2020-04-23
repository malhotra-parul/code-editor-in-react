import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
    body{
        background-color: #fff;
        margin: 0;
        padding: 0;
        font-family: 'Roboto Mono', monospace;
    }
`


export default GlobalStyles;