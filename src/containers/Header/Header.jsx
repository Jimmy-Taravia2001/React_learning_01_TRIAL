import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header__content">
        <h1 className="gradient__text">
          Let's Build Something with Buzzing Tech
        </h1>
        <p>
          In cryptography, a cipher is an algorithm for performing encryption or
          decryption—a series of well-defined steps that can be followed as a
          procedure. An alternative, less common term is encipherment. To
          encipher or encode is to convert information into cipher or code. Here 
          Comes Jimmy explaining these topics.
        </p>
        <div className="header__input">
          <input type="email" name="" id="" placeholder="Your Email Address" />
          <button>Subscribe Us</button>
        </div>
        <div className="header__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit last 24 hours</p>
        </div>
      </div>
      <div className="header__image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
