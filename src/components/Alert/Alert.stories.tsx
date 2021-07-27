import Alert from "./Alert";
export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    theme: {
      options:["primary","danger","success","warning","dark"],
      control: {type: "select"},
    },
    fill: {
      options:["Dark Solid","Light Solid","Outline"],
      control: {type: "select"},
    },
  },
};
export const Main = (args: any) => <Alert {...args}></Alert>;
Main.args = {
  theme:"primary",
  fill:"Light Solid"
};
