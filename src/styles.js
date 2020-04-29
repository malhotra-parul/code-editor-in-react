import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
`;

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  overflow-y: auto;
  width: 100%;
  height: "530px";
  resize: "none";
  margin: 0;
  padding: 0;
  border: 2px solid #f6f8fa;
`;
export const ModifiedWrapper = styled.div`
  font-family: sans-serif;
  width: 100%;
  height: "530px";
  margin-top: 10px;
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
  display: flex;
  justify-content: space-evenly;
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const ToggleInput = styled.input`
  -webkit-appearance: none;
  outline: none;
  position: relative;
  width: 60px;
  height: 30px;
  background: url(https://image.flaticon.com/icons/svg/1164/1164954.svg);
  background-size: contain;
  border-radius: 50px;
  transition: background-image 0.5s;
  box-shadow: 0px 2px 5px 1px gray;
  margin: 10px;
  &:checked {
    background-image: url(https://image.flaticon.com/icons/svg/2033/2033921.svg);
    transition: background-image 0.5s;
    &::before {
      transform: translateX(100%);
      background-color: #283634;
      transition: all 0.5s;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;

    background: #f28f44;
    border-radius: 50px;
    transition: all 0.5s;
  }

  @media(max-width: 660px){
    display: none;
  }
`;

export const Sample = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  line-height: -2;
  box-sizing: border-box;
  @media(max-width: 660px){
  padding: 1px;
  justify-content: space-around;
 
  }
`;

export const Image = styled.img`
  width: 10em;
  position: relative;
  top: 20px;
  left: 20px;
  @media (max-width: 550px) {
    left: 0;
    text-align: center;
    padding: 10px;
  }
`;

export const Heading = styled.header`
  margin-bottom: 40px;
  padding: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const UnorderedList = styled.ul`
  position: relative;
  right: 20px;
  top: 20px;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
  li {
    list-style: none;
  }
  @media (max-width: 550px) {
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    padding: 10px;
  }
`;

export const Link = styled.a`
  position: relative;
  width: 30px;
  height: 30px;
  display: block;
  text-align: center;
  margin: 0 10px;
  border-radius: 50%;
  padding: 6px;
  box-sizing: border-box;
  text-decoration: none;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  background: linear-gradient(0deg, #ddd, #fff);
  transition: 0.5s;
  & :hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const IconWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #fff, #ddd);
  border-radius: 50%;
  line-height: calc(18px);
  font-size: 19px;
  color: #262626;
  transition: 0.09s;
`;

export const IDEWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 80%;
  margin: 0 auto;
  padding: 0pc;
  margin-bottom: 10px;
  box-sizing: border-box;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.275)!important;
  @media(max-width: 660px){
    width: 95%;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 50px;
  padding: 0;
  margin:0;
  border: 2px solid #f6f8fa;
  @media(max-width: 660px){
    padding: 0;
    justify-content: space-around;
    height: auto;
    width: auto;
  }
`;

export const StyledButton = styled.button`
  background-color: green;
  color: white;
  font-size: 1.3em;
  padding: 5px 35px;
  font-family: "Roboto Mono", monospace;
`;

export const Bg = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 1;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props =>
    props.isModalOpen === true ? "visible" : "hidden"};
  opacity: ${props =>
    props.isModalOpen === true ? "1" : "0"};
  transition: visibility 0s, opacity 0.5s;

`;

export const PopUp = styled.div`
  background: white;
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;
  box-shadow: 5px 5px 5px 0px #c6c2c2;
  transition: all 0.6s;

  @media(max-width: 660px){
    padding: 2px;
    width: 90%;
  }
`;

export const Tip = styled.p`
  color: #c6c2c2;
  @media(max-width: 660px){
    font-size: 14px;
  }
`;
export const ImageHolder = styled.div`
  background: #ecf3fe;
  padding: 15px;
  border-radius: 70px;
  z-index: 1;
  @media(max-width: 660px){
    padding: 2px;
  }
`;
export const DivHolder = styled.div`
  background: #ddebfd;
  padding: 20px;
  z-index: 4;
  border-radius: 100px;
`;
export const Img = styled.img`
  height: 60px;
  width: auto;
  @media(max-width: 660px){
    height: 50px;
  }
`;

export const ButtonHolder= styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
`;

export const ModalBtn = styled.button`
  position: relative;
  background-color: transparent;
  color: green;
  font-size: 16px;
  padding: 0.8vw 2vw;
  border-radius: 15px;
  font-family: "Roboto Mono";
  box-shadow: 0px 2px 0px 2px rgba(87, 167, 42, 1);
  border: 0.5px solid green;
  font-weight: bold;
  letter-spacing: 0.8px;
  margin: 10px;
  &:active{
  box-shadow: none;
  transform: translate(0, 5px);
  transition: all 0.2s;

  @media(max-width: 660px){
    padding: 5px 10px;
  }
  }
  &:focus{
    outline: none;
  }
`;

export const SelectLang = styled.span`
  background: #e8efe8;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover{
    cursor: pointer;
    @media(max-width: 660px){
    display: none;
    
  }
  }
`;

