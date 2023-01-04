import { ComponentStory } from "@storybook/react";
import { Alert } from "./Alert";

export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: "success",
  text: "It is success alert!",
  icon: "tick",
  backgroundColor: "#62BC9F",
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
  text: "It is info alert!",
  icon: "info",
  backgroundColor: "#60BBD0",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  text: "It is warning alert!",
  icon: "danger",
  backgroundColor: "#FDB321",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  text: "It is error alert!",
  icon: "cross",
  backgroundColor: "#CF202A",
};
