import Alert from "./Alert";
const textColors = [
  "text-primary",
  "text-danger",
  "text-success",
  "text-dark",
  "text-warning",
  "text-white",
];
const backgroundColor = [
  "bg-primaryLight",
  "bg-dangerLight",
  "bg-successLight",
  "bg-darkLight",
  "bg-warningLight",
    "bg-whiteLight",
   "bg-primary",
  "bg-danger",
  "bg-success",
  "bg-dark",
  "bg-warning",
  "bg-white",
];
export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    textColor: {
      control: {type: "select"},
      options: textColors,
      mapping: textColors,
    },
    backgroundColor: {
      control: {type: "select"},
      options: backgroundColor,
      mapping: backgroundColor,
    },
  },
};
export const Main = (args: any) => <Alert {...args}></Alert>;
Main.args = {};
