import React from "react";
import { HiMenu } from "react-icons/hi";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <>
      <div className="bg-blue-900 p-2 flex items-center">
        <img
          className="h-12 w-12"
          src="https://designreset.com/cork/ltr/demo4/assets/img/logo.svg"
        ></img>
        <h1 className="text-white text-3xl font-semibold">CORK</h1>
      </div>
      <div><HiMenu/></div>
    </>
  );
};

Header.defaultProps = {};

export default Header;
