import React, {Fragment, useState} from "react";
import {HiX} from "react-icons/hi";

interface Props {
  alertMessage: string;
  backgroundColor?: string;
  textColor?: string;
}

const Alert: React.FC<Props> = (props) => {
  let [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      {isOpen && (
        <div
          className={
            "font-medium flex justify-between p-5 text-md rounded-lg" +
            " " +
            props.backgroundColor +
            " " +
            props.textColor
          }
        >
          <p>
            {props.alertMessage}
          </p>
          <button onClick={() => setIsOpen(false)}>
            <HiX className="h-6 w-6"/>
          </button>
        </div>
      )}
    </div>
  );
};

Alert.defaultProps = {
  alertMessage:"No Message given",
  backgroundColor: "bg-primaryLight",
  textColor: "text-primary",
};

export default Alert;
