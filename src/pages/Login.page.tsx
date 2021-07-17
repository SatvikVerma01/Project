import {memo, FC} from "react";
import {Link} from "react-router-dom";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import {HiLockClosed, HiOutlineMail} from "react-icons/hi";
import MyCheckBox from "../components/MyCheckBox";
import {useState} from "react";

interface Props {}

const Login: FC<Props> = (props) => {
  const [data, setData] = useState({email: "", password: ""});

  return (
    <div className="m-auto">
      <h1 className="text-5xl font-semi-bold pt-5 pb-5">Log In to Devslane</h1>
      <p className="text-lg font-medium pb-16">
        New Here?{" "}
        <Link to="/signup" className="text-primary underline">
          Create an account
        </Link>
      </p>
      <form onSubmit={(event) => {
        console.log("login button pressed");
        event.preventDefault();
      }}>
        <div className="pb-10">
          <label htmlFor="email-address" className="sr-only">
            Email
          </label>
          <MyInput
            data={data}
            setData={setData}
            name="email"
            type="email"
            placeholder="Email"
            icon={HiOutlineMail}
            autoComplete="email"
            value={data.email}
          ></MyInput>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <MyInput
            data={data}
            setData={setData}
            name="password"
            value={data.password}
            type="password"
            placeholder="Password"
            icon={HiLockClosed}
            autoComplete="current-password"
          ></MyInput>
        </div>

        <div className="flex justify-between">
          <MyButton type="submit" name="Log In"></MyButton>
        </div>
      </form>
      <div className="flex-col justify-items-center">
        <div>
          <MyCheckBox name="Keep me logged in"></MyCheckBox>
        </div>
        <div>
          <Link
            className="text-primary text-xl font-medium"
            to="/forgotpassword"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
