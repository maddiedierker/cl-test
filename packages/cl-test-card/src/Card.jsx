import React from "react";
import Button from "@madkas/cl-test-button";
import Text from "@madkas/cl-test-text";

export default function Card({ cardText, buttonText }) {
  return (
    <div
      style={{ border: "1px solid black", padding: 5, width: "fit-content" }}
    >
      <Text>
        <div>{cardText}</div>
      </Text>
      <Button onClick={() => console.log("clicked card!")} text={buttonText} />
    </div>
  );
}
