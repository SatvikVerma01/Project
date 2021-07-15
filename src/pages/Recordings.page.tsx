import { memo, FC } from "react";

interface Props {

}

const Recordings: FC<Props> = (props) => {
    return (
        <div >
           Recordings Page
        </div>
    );
};

Recordings.defaultProps = {

}

export default memo(Recordings);