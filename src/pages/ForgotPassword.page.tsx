import { memo, FC } from "react";
import { HiOutlineMail } from "react-icons/hi";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";

interface Props{
}

const ForgotPassword: FC<Props> = (props) => {
    return (
        <div className="m-auto">
            <h1 className="text-5xl font-semi-bold pt-5 pb-5">Password Recovery</h1>
            <p className="text-lg font-medium pb-16">Enter your email and instructions will sent to you!</p>
            <div className="pb-10"><MyInput type="email" placeholder="Email" icon={HiOutlineMail} autoComplete="email"></MyInput></div>
            <MyButton name="Reset"></MyButton>
        </div>
    );
};

ForgotPassword.defaultProps = {

}

export default memo(ForgotPassword);