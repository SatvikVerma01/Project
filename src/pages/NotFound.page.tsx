import { memo, FC } from "react";

interface Props {

}

const NotFound: FC<Props> = (props) => {
    return (
        <div className="bg-red-200 text-red-900 font-bold h-screen w-screen text-6xl text-center">
            Page not found!
       </div>
    );
};

NotFound.defaultProps = {

}

export default memo(NotFound);