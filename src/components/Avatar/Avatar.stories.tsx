import Avatar from "./Avatar";
const size = ["sm", "md", "lg","xl"];
export default{
  title:"Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "select" },
      options: size,
      mapping: size,
    },
  }
}
export const Main = (args: any) => <Avatar {...args}></Avatar>;
Main.args = {
  src:"https://image.flaticon.com/icons/png/512/147/147144.png",
};