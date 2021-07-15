import { memo, FC } from "react";
import { Link } from "react-router-dom";
import AuthHero from "../components/AuthHero";

interface Props {

}

const Signup: FC<Props> = (props) => {
    return (
        <div>
            Signup Page
            <Link to="/login">Already have an account.Login in</Link>
        </div>
       
    );
};

Signup.defaultProps = {

}

export default memo(Signup);