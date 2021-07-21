import LeftSidebar from "./LeftSidebar";
export default{
  title:"LeftSidebar",
  component: LeftSidebar,
}
export const Main = (args: any) => <LeftSidebar {...args}></LeftSidebar>;
Main.args = {
};