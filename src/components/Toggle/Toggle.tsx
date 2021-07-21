import {Switch} from "@headlessui/react";
import {memo, FC} from "react";

interface Props {
  name?: string;
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggle: FC<Props> = (props) => {
  return (
    <>
      <div>
        <Switch.Group>
          <div className="flex items-center">
          <Switch.Label className="font-medium text-lg mr-2">
            {props.name}
          </Switch.Label>
          <Switch
            checked={props.enabled}
            onChange={props.setEnabled}
            className={`${props.enabled ? "bg-primary" : "bg-red-400"}
          relative inline-flex flex-shrink-0 h-6 w-12 border-2  rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">{props.name}</span>
            <span
              aria-hidden="true"
              className={`${props.enabled ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
            />
            </Switch>
            </div>
        </Switch.Group>
      </div>
    </>
  );
};

Toggle.defaultProps = {};

export default memo(Toggle);
