import React from "react";
import "./about.css";
const About = () => {
  return (
    <section className="aboutpage-con">
      <div className="aboutpage-con-wrapper">
        <div className="h3">About Us</div>
        <hr className="landing-hr" />

        <div className="h1 bold-text" style={{ lineHeight: "1.5" }}>
          Cipher is Professional Club <br /> Helping People Connect :-){" "}
        </div>
      </div>
      <img src="./aboutpage.gif" alt="gif" className="aboutpage-gif" />
    </section>
  );
};

export default About;
