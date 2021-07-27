import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";

interface Props {
  avatarArray: string[];
}
const StackingAvatar: React.FC<Props> = ({ avatarArray, ...rest }) => {
  const [showMore, setShowMore] = useState(false);
  const sizeofArray = avatarArray.length;
  let numebrOfMoreAvatars: number = 0;
  let x = [];
  if (sizeofArray > 4) {
    numebrOfMoreAvatars = sizeofArray - 4;
  }
  for (var index in avatarArray) {
    if (Number(index) >= 4) {
      break;
    } else {
      x.push(
        <Avatar
          className="transform hover:-translate-y-3"
          src={avatarArray[index]}
        ></Avatar>
      );
    }
  }
  if (showMore) {
    for (var index in avatarArray) {
    if (Number(index) >= 4) {
      x.push(
        <Avatar
          className="transform hover:-translate-y-3"
          src={avatarArray[index]}
        ></Avatar>
      );
    } 
  }
  }
  return (
    <>
      <div className="flex items-center">
        {x}
        {numebrOfMoreAvatars != 0 && <button onClick={()=>setShowMore(!showMore)} className="h-9 rounded-full text-primary shadow-xl border-primary border-2 font-semibold px-2 text-md text-center">
          +{numebrOfMoreAvatars} more
        </button>}
      </div>
    </>
  );
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
