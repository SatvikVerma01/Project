import React from "react";
import { ProgressHTMLAttributes } from "react";

interface Props extends ProgressHTMLAttributes<HTMLProgressElement>{
    className?: string;
    value: number;
    Backgroundcolor?: string;
}

const ProgressBar: React.FC<Props> = (props) => {
    const valueInString:string = String(props.value);
    return (
        <div className="bg-gray-200 h-6 rounded-full border-b-2 relative w-full">
            <div style={{width:valueInString+"%"}} className={"h-6 rounded-full w-12 absolute"+" "+ props.Backgroundcolor}></div>
        </div>
    );
};

ProgressBar.defaultProps = {
    Backgroundcolor:"bg-primary"
}

export default ProgressBar;