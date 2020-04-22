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
            <li><Link href=""><IconWrapper><FontAwesomeIcon icon={faFacebookF} color="#549cdf" size="xs" /></IconWrapper></Link></li>
            <li><Link href=""><IconWrapper><FontAwesomeIcon icon={faTwitter} color="#00aced" size="xs"/></IconWrapper></Link></li>
            <li><Link href=""><IconWrapper><FontAwesomeIcon icon={faGithub} color="#dd4b39" size="xs"/></IconWrapper></Link></li>
            <li><Link href=""><IconWrapper><FontAwesomeIcon icon={faLinkedinIn} color="#007bb6" size="xs"/></IconWrapper></Link></li>
            <li><Link href=""><IconWrapper><FontAwesomeIcon icon={faInstagram} color="#e4405f" size="xs"/></IconWrapper></Link></li>
            </UnorderedList>
        </div>
      );
}
 
export default SocialMedia;