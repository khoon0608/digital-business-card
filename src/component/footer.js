/** @format */

import React from "react";

import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className='footer'>
      <FontAwesomeIcon className='footer--icon' icon={faTwitterSquare} />
      <FontAwesomeIcon className='footer--icon' icon={faFacebookSquare} />
      <FontAwesomeIcon className='footer--icon' icon={faInstagramSquare} />
      <FontAwesomeIcon className='footer--icon' icon={faGithubSquare} />
    </footer>
  );
}

export default Footer;
