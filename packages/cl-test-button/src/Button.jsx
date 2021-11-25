import React from "react";
import Text from "@madkas/cl-test-text";

export default function Button({ text, onClick }) {
  // Purposefully don't guard against falsy onClick prop for testing
  return (
    <button onClick={onClick}>
      <Text>{text}</Text>
    </button>
  );
}
