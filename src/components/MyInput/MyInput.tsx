import React from "react";
import {memo, FC, InputHTMLAttributes} from "react";
import {IconType} from "react-icons";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  touched?: boolean;
  errors?: string;
}

const MyInput: FC<Props> = ({
  icon,
  touched,
  errors,
  placeholder,
  id,
  ...rest
}) => {
  return (
    <>
      <div className={"flex items-center text-xl"}>
        <div className="text-3xl text-primary"></div>
        {id && placeholder && (
          <label htmlFor={id} className="sr-only">
            {placeholder}
          </label>
        )}
        <input
          id={id}
          placeholder={placeholder}
          {...rest}
          className="p-5 pr-28 outline-none border-b-2 focus:border-primary focus:border-b-2"
        ></input>
      </div>
      <div className="h-5">
        {touched && <div className="text-red-500">{errors}</div>}
      </div>
    </>
  );
};

MyInput.defaultProps = {};

export default memo(MyInput);
