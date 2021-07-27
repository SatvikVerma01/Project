import {Menu} from "@headlessui/react";
import React from "react";
import { HiChevronDown} from "react-icons/hi";

interface Props {
    dropdownName: string;
    dropdownItems: [];
}

const Dropdown: React.FC<Props> = (props) => {
  return (
    <div>
      <Menu>
              <Menu.Button className="border-2 border-primary flex items-center">{props.dropdownName}<HiChevronDown/></Menu.Button>
        <Menu.Items className="flex flex-col">
          <Menu.Item>
            <a>Settings</a>
          </Menu.Item>
          <Menu.Item>
            <a>Mail</a>
          </Menu.Item>
          <Menu.Item>
            <a>Print</a>
          </Menu.Item>
          <Menu.Item>
            <a>Download</a>
          </Menu.Item>
          <Menu.Item>
            <a>Share</a>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

Dropdown.defaultProps = {};

export default Dropdown;
