/** @format */

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Title() {
  return (
    <div className='main--title'>
      <span className='main--title--name'>Kwanghoon Kim</span>
      <span className='main--title--department'>Frontend Developer</span>
      <span className='main--title--company'>nomadcoder.website</span>
    </div>
  );
}

function BtnContainer() {
  return (
    <div className='main--btn_container'>
      <div className='main-btn_container--btn'>
        <FontAwesomeIcon
          className='main-btn_container--icon'
          icon={faEnvelope}
        />
        <span>Email</span>
      </div>
      <div className='main-btn_container--btn'>
        <FontAwesomeIcon
          className='main-btn_container--icon'
          icon={faLinkedin}
        />
        <span>LinkedIn</span>
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className='min--article_container'>
      <div className='min--article_container--article'>
        <h3>About</h3>{" "}
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          minima laudantium possimus ea sunt rem
        </span>
      </div>
      <div className='min--article_container--article'>
        <h3>Interests</h3>{" "}
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          quisquam. Officiis odio cumque cupiditate
        </span>
      </div>
    </div>
  );
}

function Main() {
  return (
    <main className='main'>
      <Title />
      <BtnContainer />
      <Article />
    </main>
  );
}

export default Main;
