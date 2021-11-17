import React from "react";
import Button from "@madkas/cl-test-button";
import Text from "@madkas/cl-test-text";

export default function Card({ cardText, buttonText }) {
  return (
    <div style={{ borderColor: "black", padding: 5 }}>
      <Text>
        <p>{cardText}</p>
      </Text>
      <Button text={buttonText} />
    </div>
  );
}
