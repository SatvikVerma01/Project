import ProgressBar from "./ProgressBar";
export default{
  title:"ProgressBar",
  component: ProgressBar,
  argTypes: {
    progressColor: {
      control: { type: "select" },
      options:["primary","danger","success","warning","dark"],
    },
    progressValue: {
      control: { type: "range" },
    },
  },
}
export const Main = (args: any) => <ProgressBar {...args}></ProgressBar>;
Main.args = {
  progressColor:"bg-primary",
  progressValue: 0,
};
