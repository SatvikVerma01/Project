import { memo, FC } from "react";

interface Props {

}

const AuthHero: FC<Props> = (props) => {
    return (
        <div className="h-screen w-1/2 bg-black text-white hidden lg:block bg-logo bg-no-repeat bg-center" >
        </div>
    );
};

AuthHero.defaultProps = {

}

export default memo(AuthHero);