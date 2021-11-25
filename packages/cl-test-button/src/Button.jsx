import React from "react";
import Text from "@madkas/cl-test-text";

export default function Button({ text, onClick }) {
  // Throw an error if we don't receive an onClick
  if (!onClick) {
    throw new Error("onClick is required now");
  }

  return (
    <button onClick={onClick} style={{ backgroundColor: "aqua" }}>
      <Text>{text}</Text>
    </button>
  );
}
