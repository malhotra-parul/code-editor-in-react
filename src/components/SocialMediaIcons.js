import React from "react";
import { UnorderedList,  Link, IconWrapper } from "../styles";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faTwitter, faGithub, faLinkedinIn, faInstagram); 

const SocialMedia = () => {
    return (
        <div>
            <UnorderedList>
            <li><Link target="_blank" href="https://twitter.com/malhotra_parul"><IconWrapper><FontAwesomeIcon icon={faTwitter} color="#00aced" size="xs"/></IconWrapper></Link></li>
            <li><Link target="_blank" href="https://github.com/malhotra-parul"><IconWrapper><FontAwesomeIcon icon={faGithub} color="#dd4b39" size="xs"/></IconWrapper></Link></li>
            <li><Link target="_blank" href="https://www.linkedin.com/in/parul-malhotra-7337871b/"><IconWrapper><FontAwesomeIcon icon={faLinkedinIn} color="#007bb6" size="xs"/></IconWrapper></Link></li>
            </UnorderedList>
        </div>
      );
}
 
export default SocialMedia;