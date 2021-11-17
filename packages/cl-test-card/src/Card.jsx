import React from "react";
import Button from "@madkas/cl-test-button";
import Text from "@madkas/cl-test-text";

export default function Card(props) {
  return (
    <div style={{ borderColor: "black", padding: 5 }}>
      <Text>
        <p>card text</p>
      </Text>
      <Button text="card button" />
    </div>
  );
}
