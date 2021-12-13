import React from "react";
import Text from "@madkas/cl-test-text";
import style from "./button.module.scss";

export default function Button({ text, onClick }) {
  // Throw an error if we don't receive an onClick
  if (!onClick) {
    throw new Error("onClick is required now");
  }

  return (
    <button className={style.button} onClick={onClick}>
      <Text text={text} />
    </button>
  );
}
