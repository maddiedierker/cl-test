import React from "react";
import Text from "../src/Text";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Text",
  component: Text,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Text {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  element: "span",
  text: "im a span",
};

export const Secondary = Template.bind({});
Secondary.args = {
  element: "p",
  text: "im a p tag",
};
