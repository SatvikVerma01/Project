import Dropdown from "./Dropdown";
export default{
  title:"Dropdown",
  component: Dropdown,
}
export const Main = (args: any) => <Dropdown {...args}></Dropdown>;
Main.args = {
};