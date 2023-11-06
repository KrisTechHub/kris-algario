import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    importance: {
      options: ["importance-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    buttonText: "Button Text",
    importance: "importance-2",
    className: {},
    divClassName: {},
  },
};
