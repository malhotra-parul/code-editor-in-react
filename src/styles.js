import styled from 'styled-components';


export const Container = styled.div`
    margin: 0;
`

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  overflow: scroll;
`

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`

export const Label = styled.label`
  font-weight: bold;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  white-space: nowrap;
  align-items: center;
  cursor: pointer;
`

export const Sample = styled.div`
  padding: 16px;
`;

export const Image = styled.img`
  width: 10em;
  position: relative;
  top:20px;
  left: 20px;
  @media (max-width: 550px){
    left:0;
    text-align: center;
    padding: 10px;
  }
`;

export const Heading = styled.header`
  margin-bottom: 20px;
  padding:0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 550px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const UnorderedList = styled.ul`
  position: relative;
  right: 20px;
  top:20px;
  display:flex;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
  li{
    list-style: none;
  }
  @media (max-width: 550px){
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    padding: 10px;
  }

`;

export const Link = styled.a`
  position: relative;
  width:40px;
  height:40px;
  display:block;
  text-align:center;
  margin: 0 10px;
  border-radius: 50%;
  padding: 6px;
  box-sizing: border-box;
  text-decoration:none;
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
  background: linear-gradient(0deg, #ddd, #fff );
  transition: .5s;
  & :hover{
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  }
`;

export const IconWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #fff, #ddd);
  border-radius: 50%;
  line-height: calc( - 12px);
  font-size:24px;
  color: #262626;
  transition: .09s;
`;

