import {type} from "os";
import {memo, FC, ReactElement} from "react";
import { IconType } from "react-icons";


interface Props {
  type: string;
  placeholder: string;
  icon: IconType;
  autoComplete?: string,
  className?: string,
  name?: string,
  value?: string,
  data?: any,
  setData?:any
}


const MyInput: FC<Props> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setData({...props.data,[event.target.name]:event.target.value});
  }
  return (
    <>
      <div className={"flex items-center text-xl border-b-2"}>
        <div className="text-3xl text-primary">
          <props.icon />
        </div>
        <input
          className="p-5 pr-28 outline-none"
          type={props.type}
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          name={props.name}
          required
          value={props.value}
          onChange={handleChange}
        ></input>
        
      </div>
    </>
  );
};

MyInput.defaultProps = {};

export default memo(MyInput);
