/** @format */

import React from "react";

import Main from "./component/main";
import Footer from "./component/footer";

import pic from "./pic/kim.jpg";
import "./styles/scss/App.scss";

function App() {
  return (
    <div className='App'>
      <img src={pic} alt='pic' className='pic' />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
