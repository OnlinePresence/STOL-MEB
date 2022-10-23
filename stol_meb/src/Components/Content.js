import React from "react";
import "./Content.css";

const Content = (props) => {
  return <section className={props.className}>{props.children}</section>;
};

export default Content;
