import MyButton from "./MyButton";
export default{
  title:"MyButton",
  component: MyButton,
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
}
export const Main = (args: any) => <MyButton {...args}></MyButton>;
Main.args = {
  theme: "primary",
  fill:"Dark Solid",
};
