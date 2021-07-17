import {memo, FC} from "react";
import {HiLockClosed, HiOutlineMail} from "react-icons/hi";
import {Link} from "react-router-dom";
import AuthHero from "../components/AuthHero";
import MyButton from "../components/MyButton";
import MyCheckBox from "../components/MyCheckBox";
import MyInput from "../components/MyInput";
import Toggle from "../components/Toggle";

interface Props {}

const Signup: FC<Props> = (props) => {
  return (
    <div className="m-auto">
      <h1 className="text-5xl font-semi-bold pt-5 pb-5">
        Get Started with a <br />
        free account
      </h1>
      <div className="text-lg font-medium pb-16 flex">
        <p>Already have an account?</p>
        <Link className="ml-2 text-primary underline" to="/login">
          Log in
        </Link>
      </div>
      <div className="pb-10">
        <MyInput
          type="email"
          placeholder="Email"
          icon={HiOutlineMail}
          autoComplete="email"
        ></MyInput>
        <MyInput
          type="password"
          placeholder="Password"
          icon={HiLockClosed}
          autoComplete="new-password"
        ></MyInput>
      </div>
      <div className="flex text-lg items-center font-medium text-gray-400 pb-10">
        <MyCheckBox />I agree to the{" "}
        <Link className="text-primary ml-2" to="/termsandconditions">
          terms and conditions
        </Link>
      </div>
      <div className="flex justify-between">
        <Toggle name="Show Password"></Toggle>
        <MyButton name="Get Started!"></MyButton>
      </div>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
