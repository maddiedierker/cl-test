import React from "react";
import Text from "@madkas/cl-test-text";

export default function Button({ text }) {
  return (
    <button>
      <Text>{text}</Text>
    </button>
  );
}
