import React from "react";
import { ProgressHTMLAttributes } from "react";

interface Props extends ProgressHTMLAttributes<HTMLProgressElement>{
    className?: string;
    max: number;
    value: number;
    Backgroundcolor?: string;
}

const ProgressBar: React.FC<Props> = (props) => {
    return (
        <div className="bg-gray-200 w-24 h-6 rounded-full border-b-2">
            <div className={"h-6 rounded-full w-12"+" "+ props.Backgroundcolor}></div>
        </div>
    );
};

ProgressBar.defaultProps = {
    Backgroundcolor:"bg-primary"
}

export default ProgressBar;