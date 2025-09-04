import { IoIosMore } from "react-icons/io";
import type { IPosts } from "../../shared/types/types";
import "./styles.scss";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { postStore } from "../../app/store/post/postStore";

import { useInView } from "react-intersection-observer";
import { format, isThisYear } from "date-fns";
import { ActionsPost } from "./actionsPost";
import { MenuPost } from "./menuPost";
import { handleToggleIsOpenMenu } from "./handlers";
import { userStore } from "../../app/store/user/userStore";

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
  }, []);

  // pagination
  useEffect(() => {
    if (inView && rest.id === rest.lastPostId) {
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
    <div ref={ref} className="Post tr2 up cp">
      <div className="b1">
        {/* userData */}
        <div className="userData">
          <div className="ava"></div>

          <div className="dataPost">
            <p className="displayName"></p>

            <p className="username">@{ownerUsername}</p>
            <div className="tochka"></div>
            <p className="date">{`${formattedDate}`}</p>
          </div>
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
        <MenuPost
          isClosingMenu={isClosingMenu}
          ownerUsername={ownerUsername}
          postId={rest.id}
        />
      )}

      <p style={{ whiteSpace: "pre-wrap" }} className="content">
        {text}
      </p>

      {userStore.isAuth && userStore.isSession && (
        <ActionsPost
          isLiked={isLiked}
          likedByState={likedByState}
          setIsLiked={setIsLiked}
          setLikedByState={setLikedByState}
          isDisliked={isDisliked}
          dislikedByState={dislikedByState}
          setIsDisliked={setIsDisliked}
          setDislikedByState={setDislikedByState}
          postId={rest.id}
        />
      )}
    </div>
  );
}

export default observer(Post);
