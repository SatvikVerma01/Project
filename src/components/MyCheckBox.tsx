import {memo, FC, InputHTMLAttributes} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
}

const MyCheckBox: FC<Props> = (props) => {
  return (
    <>
      <div className="text-lg flex items-center font-medium text-gray-400">
        <input className="h-5 w-5 mr-4" type="checkbox"></input>{props.name}
      </div>
    </>
  );
};

MyCheckBox.defaultProps = {};

export default memo(MyCheckBox);
