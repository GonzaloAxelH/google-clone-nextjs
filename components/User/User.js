import { useSession } from "next-auth/react";
import React from "react";
import ButtonRounded from "../Buttons/ButtonRounded/ButtonRounded";
const User = ({ ...props }) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <ButtonRounded {...props}>
        <img
          src="https://lh3.googleusercontent.com/ogw/ADea4I6G9ODbVrzpSzl8oZhIwXpg8aP6dxx2HnD4g84y=s32-c-mo"
          alt="user"
        />
      </ButtonRounded>
    );
  }
  return null;
};

export default User;
