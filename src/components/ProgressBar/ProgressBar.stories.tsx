import ProgressBar from "./ProgressBar";
const Backgroundcolors = ["bg-primary", "bg-danger", "bg-success","bg-dark","bg-warning"];


export default{
  title:"ProgressBar",
  component: ProgressBar,
  argTypes: {
    Backgroundcolor: {
      control: { type: "select" },
      options: Backgroundcolors,
      mapping: Backgroundcolors,
    },
    value: {
      control: { type: "range" },
    },
  },
}
export const Main = (args: any) => <ProgressBar {...args}></ProgressBar>;
Main.args = {
  value: 0,
  Backgroundcolor:"bg-danger"
};
