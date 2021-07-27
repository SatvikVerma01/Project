import {memo, FC, ButtonHTMLAttributes} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  className?: string;
  theme?: string;
  fill?: string;
}

const MyButton: FC<Props> = (props) => {
  let themeClasses = "";
  if (props.fill === "Dark Solid") {
    if (props.theme == "primary") {
      themeClasses = themeClasses + "bg-primary text-white";
    }
    if (props.theme == "danger") {
      themeClasses = themeClasses + "bg-danger text-white";
    }
    if (props.theme == "success") {
      themeClasses = themeClasses + "bg-success text-white";
    }
    if (props.theme == "warning") {
      themeClasses = themeClasses + "bg-warning text-white";
    }
    if (props.theme == "dark") {
      themeClasses = themeClasses + "bg-dark text-white";
    }
  }
    if (props.fill === "Light Solid") {
    if (props.theme == "primary") {
      themeClasses = themeClasses + "bg-primaryLight text-primary";
    }
    if (props.theme == "danger") {
      themeClasses = themeClasses + "bg-dangerLight text-danger";
    }
    if (props.theme == "success") {
      themeClasses = themeClasses + "bg-successLight text-success";
    }
    if (props.theme == "warning") {
      themeClasses = themeClasses + "bg-warningLight text-warning";
    }
    if (props.theme == "dark") {
      themeClasses = themeClasses + "bg-darkLight text-dark";
    }
  }
  if (props.fill === "Outline") {
    if (props.theme == "primary") {
      themeClasses = themeClasses + "bg-white text-primary border-2 border-primary";
    }
    if (props.theme == "danger") {
      themeClasses = themeClasses + "bg-white text-danger border-2 border-danger";
    }
    if (props.theme == "success") {
      themeClasses = themeClasses + "bg-white text-success border-2 border-success";
    }
    if (props.theme == "warning") {
      themeClasses = themeClasses + "bg-white text-warning border-2 border-warning";
    }
    if (props.theme == "dark") {
      themeClasses = themeClasses + "bg-white text-dark border-2 border-dark";
    }
  }
  return (
    <>
      <button
        type={props.type}
        className={
          "text-md text-center text-white px-6 py-3 rounded-md shadow-lg hover:shadow-none font-semibold" +
          " " + themeClasses
        }
      >
        {props.name}
      </button>
    </>
  );
};

MyButton.defaultProps = {
  name: "Button",
  theme: "primary",
  fill:"Dark Solid",
};

export default memo(MyButton);
