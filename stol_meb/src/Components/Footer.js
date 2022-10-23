import React from "react";
import "./Footer.css";
import logo_dark from "../Resources/logo_dark.png";

const Footer = (props) => {
  return (
    <div>
      <div className="logo__contact">
        <img
          alt="Logo STOL-MEB"
          src={!props.colorModeLight ? props.logo : logo_dark}
        />
        <br />
        <h2
          style={{
            color: !props.colorModeLight ? "#fbfaf5" : "#161616",
          }}
        >
          Wojciech Kluska
        </h2>
      </div>
      <div className="info__contact">
        <div className="info__item">
          <h2
            style={{
              color: !props.colorModeLight ? "#fbfaf5" : "#161616",
            }}
          >
            STOL-MEB
          </h2>
          <br />
          <p>
            Wojciech Kluska <br />
            Budowlana 67 | 41-808 Zabrze
            <br />
            Numer telefonu <br />
            stol-meb.zabrze@wp.pl
            <br />
          </p>
        </div>
        <div className="info__item">
          <h2
            style={{
              color: !props.colorModeLight ? "#fbfaf5" : "#161616",
            }}
          >
            Godziny otwarcia
          </h2>
          <br />
          <p>
            Godziny x - x
            <br />
            Godziny y - y
            <br />
          </p>
        </div>
      </div>
      <br />
      <hr />
      <div className="copyright__container">
        <p className="copyright" ref={props.refProp}>
          Copyright © 2022 STOL-MEB
        </p>
      </div>
    </div>
  );
};

export default Footer;
