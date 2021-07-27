import React from "react";

interface Props{
    className?: string;
    progressValue: number;
    progressColor?: string;
    labeled?: boolean;
}

const ProgressBar: React.FC<Props> = (props) => {
    let bgColor = "";
    if (props.progressColor === "primary") {
        bgColor=bgColor+"bg-primary"
    }
    if (props.progressColor === "danger") {
        bgColor=bgColor+"bg-danger"
    }
    if (props.progressColor === "success") {
        bgColor=bgColor+"bg-success"
    }
    if (props.progressColor === "warning") {
        bgColor=bgColor+"bg-warning"
    }
    if (props.progressColor === "dark") {
        bgColor=bgColor+"bg-dark"
    }
    const valueInString:string = String(props.progressValue);
    return (
        <div className="bg-gray-200 h-6 rounded-full border-b-2 relative w-full">
           {!props.labeled && <div style={{ width: valueInString + "%" }} className={"h-6 rounded-full w-12 absolute" + " " + bgColor}></div>
            }
            {props.labeled && <div style={{ width: valueInString + "%" }} className={"h-6 rounded-full w-12 absolute text-center font-bold text-white" + " " + bgColor}>{valueInString}%</div>
       }
        </div>
    );
};

ProgressBar.defaultProps = {
    progressColor:"bg-primary",
}

export default ProgressBar;