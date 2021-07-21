import { memo, FC } from "react";

interface Props{

}

const LeftSidebar: FC<Props> = (props) => {
    return (
        <div className="h-screen w-80 bg-gray-400">
        </div>
    );
};

LeftSidebar.defaultProps = {

}

export default memo(LeftSidebar);