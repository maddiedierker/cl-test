import React from "react";
import style from "./text.module.scss";

export default function Text({ element, text, newProp }) {
  if (!newProp) {
    throw new Error("hmmm how bout now");
  }

  const Element = element || "span";
  return <Element className={style.text}>{text}</Element>;
}
