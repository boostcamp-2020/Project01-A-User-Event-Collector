import React, { FC, useEffect, useState, MouseEvent } from "react";
import icons from "../../constant/icons";
import myAxios from "../../utils/myAxios";
import { StyledEmptyHeart, StyledFilledHeart } from "./styled";

interface Props {
  type: "Tracks" | "Playlists" | "Albums" | "Artists";
  targetId: number;
}

const Heart: FC<Props> = ({ type, targetId }: Props) => {
  const [isLike, setIsLike] = useState(false);
  const reqPath = `/library/${type.toLowerCase()}/${targetId}`;

  useEffect(() => {
    const likedItem = localStorage.getItem("likedItem");
    if (likedItem !== null) {
      const { [`liked${type}`]: baseArray } = JSON.parse(likedItem);
      setIsLike(baseArray.includes(targetId));
    }
  }, [targetId]);

  const likeBtnHandler = (e: MouseEvent) => {
    e.stopPropagation();
    try {
      (async () => {
        if (!isLike) await myAxios.post(reqPath, {});
        else await myAxios.delete(reqPath);

        const { data }: any = await myAxios.get("/users/likedItem");
        localStorage.setItem("likedItem", JSON.stringify(data));
        setIsLike(!isLike);
      })();
    } catch (err) {
      console.log(err);
    }
  };

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
