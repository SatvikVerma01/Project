import React, {Fragment, useState} from "react";
import {HiX} from "react-icons/hi";

interface Props {
  alertMessage: string;
  theme?: string;
  fill?: string;
}

const Alert: React.FC<Props> = (props) => {
  let [isOpen, setIsOpen] = useState(true);
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
    <div>
      {isOpen && (
        <div
          className={
            "font-medium flex justify-between p-5 text-md rounded-lg" +
            " " +
            themeClasses
          }
        >
          <p>{props.alertMessage}</p>
          <button onClick={() => setIsOpen(false)}>
            <HiX className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};

Alert.defaultProps = {
  alertMessage: "No Message given",
  theme:"primary",
  fill:"Light solid"
  
};

export default Alert;
