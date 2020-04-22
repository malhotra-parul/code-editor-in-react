import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faTwitter, faGithub, faLinkedinIn, faInstagram); 

const SocialMedia = () => {
    return (
        <div>
            <ul>
            <li><FontAwesomeIcon icon={faFacebookF} color="green" /></li>
            <li><FontAwesomeIcon icon={faTwitter} color="green"/></li>
            <li><FontAwesomeIcon icon={faGithub} color="green"/></li>
            <li><FontAwesomeIcon icon={faLinkedinIn} color="green"/></li>
            <li><FontAwesomeIcon icon={faInstagram} color="green"/></li>
            </ul>
        </div>
      );
}
 
export default SocialMedia;