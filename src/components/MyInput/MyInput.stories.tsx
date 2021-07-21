import MyInput from "./MyInput";
export default{
  title:"MyInput",
  component: MyInput,
}
export const Main = (args: any) => <MyInput {...args}></MyInput>;
Main.args = {
};