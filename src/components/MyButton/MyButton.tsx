import {memo, FC, ButtonHTMLAttributes} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  Backgroundcolor?: string;
  className?: string;
  borderColor?: string;
  textColor?: string;
    borderWidth?: string;
}

const MyButton: FC<Props> = (props) => {
  return (
    <>
      <button
        type={props.type}
        className={
          "text-md text-center text-white px-6 py-3 rounded-md shadow-lg hover:shadow-none" +
          " " +
          props.Backgroundcolor +
          " " +
          props.className +
          " " +
          props.borderColor +
          " " +
          props.textColor +
          " " +
            props.className +
            " "+ props.borderWidth
        }
      >
        {props.name}
      </button>
    </>
  );
};

MyButton.defaultProps = {
  name: "Button",
  Backgroundcolor: "bg-primary",
  borderColor: "border-primary",
  textColor: "text-white",
};

export default memo(MyButton);
