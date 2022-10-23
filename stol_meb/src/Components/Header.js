import React, { useState } from "react";
import "./Header.css";
import { CgMenu, CgClose } from "react-icons/cg";

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const hamburgerListener = () => {
    setShowMenu(!showMenu);
  };

  const icon_style = { color: "#fbfaf5", fontSize: "40px" };
  return (
    <header>
      <div>
        <input
          id="start"
          type="image"
          src={props.logo}
          alt="Logo STOL-MEB"
          className="logo"
          width="250px"
          height="90px"
          onClick={props.startHandler}
        />
        <button
          className="hamburger__button"
          onClick={hamburgerListener}
          style={{
            flexWrap: showMenu ? "" : "wrap",
          }}
        >
          {showMenu ? (
            <CgClose style={icon_style} />
          ) : (
            <CgMenu style={icon_style} />
          )}
        </button>
        <ul className={`navigation${showMenu ? "__active" : ""}`}>
          <li>
            <a id="about" onClick={props.aboutHandler}>
              O nas
            </a>
          </li>
          <li>
            <a id="offer" onClick={props.offerHandler}>
              Oferta
            </a>
          </li>
          <li>
            <a id="gallery" onClick={props.galleryHandler}>
              Galeria
            </a>
          </li>
          <li>
            <a id="contact" onClick={props.contactHandler}>
              Kontakt
            </a>
          </li>
          <li>
            <button
              className="dark__mode"
              onClick={props.darkModeHandler}
              style={{
                border: !props.colorModeLight
                  ? "2px solid #dba34f"
                  : "2px solid #808080",
              }}
            />
            <button
              className="light__mode"
              onClick={props.lightModeHandler}
              style={{
                border: props.colorModeLight
                  ? "2px solid #dba34f"
                  : "2px solid #808080",
              }}
            />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
