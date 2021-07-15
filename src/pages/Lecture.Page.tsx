import { memo, FC } from "react";

interface Props {

}

const Lecture: FC<Props> = (props) => {
    return (
        <div>
            Lecture Page
        </div>
    );
};

Lecture.defaultProps = {

}

export default memo(Lecture);