import { memo, FC, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string,
}

const MyButton: FC<Props> = (props) => {
    return (
        <>
            <button type={props.type} className="border text-md text-center bg-primary text-white px-6 py-3 rounded-md shadow-lg hover:shadow-none">{props.name}</button>
        </>
    );
};

MyButton.defaultProps = {

}

export default memo(MyButton);