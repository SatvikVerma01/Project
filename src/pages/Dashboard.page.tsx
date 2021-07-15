import { memo, FC } from "react";

interface Props {

}

const Dashboard: FC<Props> = (props) => {
    return (
        <div >
            Dashboard Page
        </div>
    );
};

Dashboard.defaultProps = {

}

export default memo(Dashboard);