import { IoIosMore } from "react-icons/io";
import type { IPosts } from "../../shared/types/types";
import "./styles.scss";
import { useEffect, useState } from "react";
import { userStore } from "../../app/store/user/userStore";
import { observer } from "mobx-react-lite";
import { postStore } from "../../app/store/post/postStore";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { AiFillDislike, AiOutlineDislike } from "react-icons/ai";
import { Button } from "../../shared/UI/Button";
import { useInView } from "react-intersection-observer";
import { format, isThisYear } from "date-fns";
import {
  handleCopyLinkPost,
  handleDeletePost,
  handleDislike,
  handleLikedPost,
  handleToggleIsOpenMenu,
  handleUnDislike,
  handleUnLikedPost,
} from "./handlers";

function Post({ ownerUsername, text, ...rest }: IPosts) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isClosingMenu, setIsClosingMenu] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const [likedByState, setLikedByState] = useState(rest._count?.likedBy || 0);
  const [dislikedByState, setDislikedByState] = useState(
    rest._count?.dislikedBy || 0
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // setIsLiked - setIsDisliked
  useEffect(() => {
    const isLikedPost = postStore.likedPosts.some(
      (post) => post.postId === rest.id
    );
    setIsLiked(isLikedPost);

    const isDislikedPost = postStore.dislikedPosts.some(
      (post) => post.postId === rest.id
    );
    setIsDisliked(isDislikedPost);
  }, [postStore.likedPosts, postStore.dislikedPosts]);

  // pagination
  useEffect(() => {
    if (inView && rest.id === rest.lastPostId) {
      console.log("Post.tsx 56");
      rest.paginationFunc();
    }
  }, [inView]);

  const postDate = new Date(rest.createdAt);
  const isPostThisYear = isThisYear(postDate);
  let formattedDate = "";

  if (isPostThisYear) {
    formattedDate = format(postDate, "d MMMM, HH:mm");
  } else {
    formattedDate = format(postDate, "d MMMM yyyy, HH:mm");
  }

  return (
    <div ref={ref} className="Post tr2 cp">
      <div className="b1">
        {/* userData */}
        <div className="userData">
          <div className="ava"></div>
          <div className="tochka"></div>
          <p className="username">@{ownerUsername}</p>
          <div className="tochka"></div>
          <p className="date">{`${formattedDate}`}</p>
        </div>

        {/* menuIcon */}
        <div
          onClick={() =>
            handleToggleIsOpenMenu({
              isOpenMenu: isOpenMenu,
              setIsOpenMenu: setIsOpenMenu,
              setIsClosingMenu: setIsClosingMenu,
            })
          }
          className="menuIcon tr3"
        >
          <IoIosMore />
        </div>
      </div>

      {/* menu */}
      {isOpenMenu == true && (
        <div className={`menu tr3 ${isClosingMenu ? "fo btt" : "fn"}`}>
          <Button label="пожаловаться" className="el menuEl tr" />

          <Button
            onClick={() => handleCopyLinkPost(rest.id)}
            label="скопировать ссылку"
            className="el tr menuEl"
          />

          {ownerUsername == userStore.dataMap.username && (
            <Button
              onClick={() => handleDeletePost(rest.id)}
              label="удалить"
              className="el tr menuEl"
            />
          )}
        </div>
      )}

      <p style={{ whiteSpace: "pre-wrap" }} className="content">
        {text}
      </p>

      <div className="actions">
        {/* like */}
        <div className="likeC">
          {!isLiked && (
            <BiLike
              className="likeEl"
              size={20}
              color="#444"
              onClick={() =>
                handleLikedPost({
                  id: rest.id,
                  setIsLiked: setIsLiked,
                  setLikedByState: setLikedByState,
                })
              }
            />
          )}

          {isLiked && (
            <BiSolidLike
              className="unlikeEl"
              size={20}
              color="#d9d8d8"
              onClick={() =>
                handleUnLikedPost({
                  id: rest.id,
                  setIsDisliked: setIsLiked,
                  setDislikedByState: setLikedByState,
                })
              }
            />
          )}

          <div className="likedByCount">{likedByState}</div>
        </div>

        {/* dislike */}
        <div className="likeC">
          {!isDisliked && (
            <AiOutlineDislike
              className="likeEl"
              size={20}
              color="#444"
              onClick={() =>
                handleDislike({
                  id: rest.id,
                  setIsDisliked: setIsDisliked,
                  setDislikedByState: setDislikedByState,
                })
              }
            />
          )}
          {isDisliked && (
            <AiFillDislike
              className="likeEl"
              size={20}
              color="#d9d8d8"
              onClick={() =>
                handleUnDislike({
                  id: rest.id,
                  setIsDisliked: setIsDisliked,
                  setDislikedByState: setDislikedByState,
                })
              }
            />
          )}

          <div className="dislikedByCount">{dislikedByState}</div>
        </div>
      </div>
    </div>
  );
}

export default observer(Post);
