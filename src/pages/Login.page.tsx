import {memo, FC} from "react";
import {Link, useHistory} from "react-router-dom";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import {HiLockClosed, HiOutlineMail} from "react-icons/hi";
import MyCheckBox from "../components/MyCheckBox";
import * as yup from "yup";
import {useFormik} from "formik";
import {FaSpinner} from "react-icons/fa";

interface Props {}

const Login: FC<Props> = (props) => {
  const history = useHistory();
  const myForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data, {setSubmitting}) => {
      setTimeout(() => {
        console.log("form submitting", data);
        setSubmitting(false);
        history.push("/dashboard");
      }, 3000);
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
  });

  return (
    <div className="m-auto">
      <h1 className="text-5xl font-semi-bold pt-5 pb-5">Log In to Devslane</h1>
      <p className="text-lg font-medium pb-16">
        New Here?{" "}
        <Link to="/signup" className="text-primary underline">
          Create an account
        </Link>
      </p>
      <form onSubmit={myForm.handleSubmit}>
        <div className="pb-10">
          <MyInput
            id="email-address"
            type="email"
            placeholder="Email"
            icon={HiOutlineMail}
            autoComplete="email"
            {...myForm.getFieldProps("email")}
            required
            touched={myForm.touched.email}
            errors={myForm.errors.email}
          ></MyInput>
          <MyInput
            id="password"
            type="password"
            placeholder="Password"
            icon={HiLockClosed}
            autoComplete="current-password"
            {...myForm.getFieldProps("password")}
            touched={myForm.touched.password}
            errors={myForm.errors.password}
            required
          ></MyInput>
        </div>

        <div className="flex justify-between">
          <MyButton type="submit" name="Log In"></MyButton>
        </div>
        {myForm.isSubmitting && (
          <FaSpinner className="animate-spin"></FaSpinner>
        )}
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
