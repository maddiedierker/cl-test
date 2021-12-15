import React from "react";
import { render } from "@testing-library/react";
import Button from "../src/Button";

test("renders", () => {
  render(<Button onClick={() => {}} text="my button" />);
});
