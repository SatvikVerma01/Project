import React, {ImgHTMLAttributes} from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  size?: string;
  src: string;
  isOnline?: boolean;
}

const Avatar: React.FC<Props> = ({size, src, isOnline, ...rest}) => {
  let avatarSize = "h-14 w-14";
  let dotSize = "h-4 w-4";
  switch (size) {
    case "sm": {
      avatarSize = "h-12 w-12";
      dotSize = "h-3 w-3";
      break;
    }
    case "md": {
      avatarSize = "h-14 w-14";
      dotSize = "h-4 w-4";
      break;
    }
    case "lg": {
      avatarSize = "h-16 w-16";
      dotSize = "h-5 w-5";
      break;
    }
    case "xl": {
      avatarSize = "h-20 w-20";
      dotSize = "h-6 w-6";
      break;
    }
  }
  return (
    <div className={"relative" + " " + avatarSize}>
      <img {...rest} src={src} className="rounded-full"></img>
      {isOnline && (
        <div
          className={
            "bg-success rounded-full absolute bottom-0 right-0" +
            " " +
            dotSize
          }
        ></div>
      )}
      {!isOnline && (
        <div
          className={
            "bg-gray-500 rounded-full absolute bottom-0 right-0" +
            " " +
            dotSize
          }
        ></div>
      )}
    </div>
  );
};

Avatar.defaultProps = {
  src: "https://image.flaticon.com/icons/png/512/147/147144.png",
  isOnline: true,
};

export default Avatar;
