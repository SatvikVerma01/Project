import {memo, FC} from "react";
import {Route, Switch} from "react-router-dom";
import AuthHero from "../components/AuthHero";
import ForgotPasswordPage from "./ForgotPassword.page";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";

interface Props {}

const Auth: FC<Props> = (props) => {
  return (
    <div className="flex justify-between">
      <Switch>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/signup">
          <SignupPage></SignupPage>
        </Route>
        <Route path="/forgotpassword">
          <ForgotPasswordPage></ForgotPasswordPage>
        </Route>
      </Switch>
      <AuthHero></AuthHero>
    </div>
  );
};

Auth.defaultProps = {};

export default memo(Auth);
