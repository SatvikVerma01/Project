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
  },
}
export const Basic = (args: any) => <ProgressBar {...args}></ProgressBar>;
Basic.args = {
  max: 100,
  value: 0,
  Backgroundcolor:"bg-danger"
};
export const Labeled = (args: any) => <ProgressBar {...args}></ProgressBar>;
Labeled.args = {
  max: 100,
  value:0
};