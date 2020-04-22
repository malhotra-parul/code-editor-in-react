import React from "react";
import { Image, Heading } from "../styles";
import SocialMedia from "./SocialMediaIcons";


const Header = (props) => {
    return ( 
       <Heading>
        <Image src="https://i.ibb.co/BNpt3gw/download-img-code.png" alt="/"/>
        <SocialMedia />
       </Heading>
     );
}
 
export default Header;