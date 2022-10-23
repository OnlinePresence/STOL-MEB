import "./App.css";
import React, { useState, useRef } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import logo from "./Resources/logo.png";

function App() {
  const startScroll = useRef(0);
  const aboutScroll = useRef(0);
  const offerScroll = useRef(0);
  const galleryScroll = useRef(0);
  const contactScroll = useRef(0);

  const startHandler = () => {
    startScroll.current.scrollIntoView({ block: "start" });
  };

  const aboutHandler = () => {
    aboutScroll.current.scrollIntoView({ block: "start" });
  };

  const offerHandler = () => {
    offerScroll.current.scrollIntoView({ block: "start" });
  };

  const galleryHandler = () => {
    galleryScroll.current.scrollIntoView({ block: "start" });
  };

  const contactHandler = () => {
    contactScroll.current.scrollIntoView({ block: "start" });
  };

  const [colorModeLight, setColorModeLight] = useState(false);

  const darkModeHandler = () => {
    setColorModeLight(false);
  };

  const lightModeHandler = () => {
    setColorModeLight(true);
  };

  return (
    <div
      className="App"
      ref={startScroll}
      style={{
        backgroundColor: !colorModeLight ? "#161616" : "#fbfaf5",
        color: !colorModeLight ? "#fbfaf5" : "#161616",
      }}
    >
      <Header
        logo={logo}
        refProp={startScroll}
        startHandler={startHandler}
        aboutHandler={aboutHandler}
        offerHandler={offerHandler}
        galleryHandler={galleryHandler}
        contactHandler={contactHandler}
        darkModeHandler={darkModeHandler}
        lightModeHandler={lightModeHandler}
        colorModeLight={colorModeLight}
      />
      <Banner className="banner__one">
        <h1 className="banner__text" ref={aboutScroll}>
          USŁUGI STOLARSKIE
        </h1>
      </Banner>
      <Content>
        <h1
          style={{
            color: !colorModeLight ? "#fbfaf5" : "#161616",
          }}
        >
          O NAS
        </h1>
        <p className="about__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec
          dui nunc mattis enim ut. Tempus egestas sed sed risus pretium quam
          vulputate dignissim. Volutpat commodo sed egestas egestas fringilla
          phasellus faucibus. Fermentum posuere urna nec tincidunt praesent
          semper feugiat. Aliquam ut porttitor leo a diam sollicitudin. Sed
          adipiscing diam donec adipiscing tristique risus nec feugiat. Turpis
          nunc eget lorem dolor sed. Senectus et netus et malesuada fames ac.
          Pharetra vel turpis nunc eget lorem dolor.
        </p>
      </Content>
      <Banner className="banner__two">
        <div ref={offerScroll}></div>
      </Banner>
      <Content className="content__wide">
        <div>
          <h1
            style={{
              color: !colorModeLight ? "#fbfaf5" : "#161616",
            }}
          >
            NASZA OFERTA
          </h1>
          <p>
            SPRZEDAŻ BLATÓW
            <br />
            <br />
            CIĘCIE I OKLEJANIE PŁYT MEBLOWYCH
            <br />
            <br />
            MEBLE KUCHENNE
            <br />
            <br />
            MEBLE DO SALONU I SYPIALNI
            <br />
            <br />
            <p className="highlight">
              I WIELE INNYCH
              <br />
            </p>
          </p>
        </div>
        <Banner className="banner__content" />
      </Content>
      <Banner className="banner__three" />
      <Content className="gallery__title">
        <h1
          ref={galleryScroll}
          style={{
            color: !colorModeLight ? "#fbfaf5" : "#161616",
          }}
        >
          NASZE REALIZACJE
        </h1>
      </Content>
      <Gallery />
      <Banner className="banner__four" />
      <iframe
        className="google__maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449.92231990690817!2d18.785758343194097!3d50.363850904529684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47112e80f6849ed9%3A0xa66e7791361ec1f1!2sBudowlana%2067%2C%2041-808%20Zabrze!5e0!3m2!1spl!2spl!4v1663593000406!5m2!1spl!2spl"
        title="Google Maps"
      ></iframe>
      <Content className="content__footer">
        <Footer
          logo={logo}
          refProp={contactScroll}
          colorModeLight={colorModeLight}
        />
      </Content>
    </div>
  );
}

export default App;
