import React from "react";
import { theme as themes } from "@madkas/cl-test-ui";

export default function Text({ theme, element, text }) {
  const Element = element;
  const style = {
    backgroundColor: (themes[theme] || {}).primaryBgColor,
    color: (themes[theme] || {}).primaryFontColor,
  };
  return <Element style={style}>{text}</Element>;
}
