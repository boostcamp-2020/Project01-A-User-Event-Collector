import React, { FC, useEffect, useState } from "react";
import icons from "../../constant/icons";
import myAxios from "../../utils/myAxios";
import { StyledEmptyHeart, StyledFilledHeart } from "../Playbar/styled";

interface Props {
  type: "Tracks" | "Playlists" | "Albums" | "Artists";
  targetId: number;
}

const Heart: FC<Props> = ({ type, targetId }: Props) => {
  const [isLike, setIsLike] = useState(false);
  const reqPath = `/library/${type.toLowerCase()}/${targetId}`;

  const likeBtnHandler = () => {
    if (!isLike) myAxios.post(reqPath, {});
    else myAxios.delete(reqPath);

    setIsLike(!isLike);
  };

  useEffect(() => {
    const likedItem = localStorage.getItem("likedItem");

    if (likedItem !== null) {
      const { [`liked${type}`]: baseArray } = JSON.parse(likedItem);
      setIsLike(baseArray.includes(targetId));
    }
  }, []);

  return (
    <>
      {isLike ? (
        <StyledFilledHeart onClick={likeBtnHandler}>{icons.emptyHeart}</StyledFilledHeart>
      ) : (
        <StyledEmptyHeart onClick={likeBtnHandler}>{icons.emptyHeart}</StyledEmptyHeart>
      )}
    </>
  );
};

export default Heart;
