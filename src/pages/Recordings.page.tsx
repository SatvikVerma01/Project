import { memo, FC } from "react";
import { Link } from "react-router-dom";

interface Props {

}

const Recordings: FC<Props> = (props) => {
    return (
        <div >
            Recordings Page
            <Link to="/dashboard">Go to dashboard</Link>
        </div>
    );
};

Recordings.defaultProps = {

}

export default memo(Recordings);