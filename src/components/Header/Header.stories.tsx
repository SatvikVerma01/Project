import Header from "./Header";
export default{
  title:"Header",
  component: Header,
}
export const Main = (args: any) => <Header {...args}></Header>;
Main.args = {
};