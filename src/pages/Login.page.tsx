import { memo, FC } from "react";
import { Link } from "react-router-dom";
import AuthHero from "../components/AuthHero";

interface Props{

}

const Login: FC<Props> = (props) => {
    return (
        
            <div>
                Login Page
                <Link to="/signup">Create a new account</Link>
                <Link to="/dashboard">Go to dashboard</Link>
            </div>
      
    );
};

Login.defaultProps = {

}

export default memo(Login);