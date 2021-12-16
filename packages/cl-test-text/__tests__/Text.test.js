import React from "react";
import { render } from "@testing-library/react";
import Text from "../src/Text";

test("renders", () => {
  render(<Text text="hi" />);
});
