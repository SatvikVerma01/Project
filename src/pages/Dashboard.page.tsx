import { memo, FC } from "react";
import { Link } from "react-router-dom";

interface Props {

}

const Dashboard: FC<Props> = (props) => {
    return (
        <div >
            Dashboard Page
            <Link to="/recordings">recordings</Link>
        </div>
    );
};

Dashboard.defaultProps = {

}

export default memo(Dashboard);