import React from "react";
import Avatar from "../Avatar/Avatar";

interface Props {
  avatarArray: string[];
}

const StackingAvatar: React.FC<Props> = ({ avatarArray, ...rest }) => {
    const sizeofArray = avatarArray.length;
    return <>
  
    </>;
};

StackingAvatar.defaultProps = {
  avatarArray: [
    "https://image.flaticon.com/icons/png/512/147/147144.png",
    "https://image.flaticon.com/icons/png/512/194/194938.png",
    "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScPuSSp3dmio9nEwA8FEAppD_ZzC7j7pCaDKYjiG1thpF4AyTQ-CvOonekXg3JdRl-_Kk&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvke8Pr8T6xz52yM8v0ieg0oQy9L9SwfkO4hy4IKoRpxyQBKSGUWto7sWmzj9YYgm1VzU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTea6mpJZODj13Lvutndl6PgvULvVC3tPcreM4doidd7vHImnTOeK0HkfZIrFGeHuN_aJc&usqp=CAU",
  ],
};

export default StackingAvatar;
