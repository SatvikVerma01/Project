import {useFormik} from "formik";
import {memo, FC} from "react";
import {HiLockClosed, HiOutlineMail} from "react-icons/hi";
import {Link, useHistory} from "react-router-dom";
import MyButton from "../components/MyButton";
import MyCheckBox from "../components/MyCheckBox";
import MyInput from "../components/MyInput";
import * as yup from "yup";
import {FaSpinner} from "react-icons/fa";

interface Props {}

const Signup: FC<Props> = (props) => {
  const history = useHistory();
  const myForm = useFormik({
    initialValues: {
      firstName: "",
      lastName:"",
      email: "",
      password: "",
    },
    onSubmit: (data, {setSubmitting}) => {
      setTimeout(() => {
        console.log("form submitting", data);
        setSubmitting(false);
        history.push("/login");
      }, 3000);
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
      firstName: yup.string().required("Please enter First Name"),
      lastName:yup.string(),
    }),
  });
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
      <form onSubmit={myForm.handleSubmit}>
        <div className="pb-10">
          <MyInput
            id="First-Name"
            type="text"
            placeholder="First Name"
            required
            {...myForm.getFieldProps("firstName")}
            touched={myForm.touched.firstName}
            errors={myForm.errors.firstName}
          ></MyInput>
             <MyInput
            id="Last-Name"
            type="text"
            placeholder="Last Name"
            required
            {...myForm.getFieldProps("lastName")}
            touched={myForm.touched.lastName}
            errors={myForm.errors.lastName}
          ></MyInput>
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
          <MyButton type="submit" name="Get Started!"></MyButton>
        </div>
        {myForm.isSubmitting && (
          <FaSpinner className="animate-spin"></FaSpinner>
        )}
      </form>
      <div className="flex text-lg items-center font-medium text-gray-400 pb-10">
        <MyCheckBox />I agree to the{" "}
        <Link className="text-primary ml-2" to="/termsandconditions">
          terms and conditions
        </Link>
      </div>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
