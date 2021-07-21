import MyCheckBox from "./MyCheckBox";
export default{
  title:"MyCheckBox",
  component: MyCheckBox,
}
export const Main = (args: any) => <MyCheckBox {...args}></MyCheckBox>;
Main.args = {
};