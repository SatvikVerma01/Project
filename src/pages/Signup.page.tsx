import { memo, FC } from "react";

interface Props {

}

const Signup: FC<Props> = (props) => {
    return (
        <div >
            Signup Page
        </div>
    );
};

Signup.defaultProps = {

}

export default memo(Signup);