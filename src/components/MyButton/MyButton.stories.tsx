import MyButton from "./MyButton";
const Backgroundcolors = ["bg-primary", "bg-danger", "bg-success", "bg-dark", "bg-warning","bg-white"];
const borderColors = ["border-primary", "border-danger", "border-success", "border-dark", "border-warning"];
const textColors = ["text-primary", "text-danger", "text-success", "text-dark", "text-warning"];
const borderWidths = ["border-0", "border", "border-2", "border-4", "border-6"];
export default{
  title:"MyButton",
  component: MyButton,
   argTypes: {
    Backgroundcolor: {
      control: { type: "select" },
      options: Backgroundcolors,
      mapping: Backgroundcolors,
     },
       borderColor: {
      control: { type: "select" },
      options: borderColors,
      mapping: borderColors,
     },
      textColor: {
      control: { type: "select" },
      options:textColors,
      mapping: textColors,
     },
      borderWidth: {
      control: { type: "select" },
      options: borderWidths,
      mapping: borderWidths,
     },
  },
}
export const Main = (args: any) => <MyButton {...args}></MyButton>;
Main.args = {
  
};
