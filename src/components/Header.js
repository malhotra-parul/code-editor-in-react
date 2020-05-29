import React from "react";
import { Image, Heading } from "../styles";
import SocialMedia from "./SocialMediaIcons";


const Header = (props) => {
    return ( 
       <Heading>
        <Image src="https://i.ibb.co/Xy32Lx9/algorithm.png" alt="/"/>
        <SocialMedia />
       </Heading>
     );
}
 
export default Header;