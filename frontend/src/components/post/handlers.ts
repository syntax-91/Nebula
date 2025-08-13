import type { SetStateAction } from "react";
import { deletePostAPI, dislikePostAPI, likePostAPI } from "./api";
import { postStore } from "../../app/store/post/postStore";
import { modalStore } from "../../app/store/modalStore";

// handleToggleIsOpenMenu

interface IHandleToggleIsOpenMenu {
  isOpenMenu: boolean;
  setIsOpenMenu: (e: SetStateAction<boolean>) => void;
  setIsClosingMenu: (e: SetStateAction<boolean>) => void;
}

export const handleToggleIsOpenMenu = ({
  ...props
}: IHandleToggleIsOpenMenu) => {
  if (props.isOpenMenu == true) {
    props.setIsClosingMenu(true);

    setTimeout(() => {
      props.setIsOpenMenu(false);
      props.setIsClosingMenu(false);
    }, 300);
  } else {
    props.setIsOpenMenu(true);
  }
};

// handleLiked - handleUnLiked

interface ILikePost {
  id: number;
  setIsLiked: (e: SetStateAction<boolean>) => void;
  setLikedByState: (e: SetStateAction<number>) => void;
}

export const handleLikedPost = ({ ...props }: ILikePost) => {
  likePostAPI(props.id, "liked").then((e) => {
    if (e) {
      props.setIsLiked(true);
      props.setLikedByState((prev) => (prev += 1));
    }
  });
};

export const handleUnLikedPost = ({ ...props }: ILikePost) => {
  likePostAPI(props.id, "unlike").then((e) => {
    if (e) {
      props.setIsLiked(false);
      props.setLikedByState((prev) => (prev -= 1));
    }
  });
};

// deletePost
export const handleDeletePost = (id: number) => {
  deletePostAPI(id).then((success) => {
    if (success == true) {
      postStore.deletePost(id);
    }
  });
};

// copyLinkPost

export const handleCopyLinkPost = (id: number) => {
  modalStore.run("скопировано");
  navigator.clipboard.writeText(`http://loclhost:1488/post/${id}`);
};

// dislike

interface IDislikePost {
  id: number;
  setIsDisliked: (e: SetStateAction<boolean>) => void;
  setDislikedByState: (e: SetStateAction<number>) => void;
}

export const handleDislike = ({ ...props }: IDislikePost) => {
  dislikePostAPI(props.id, "disliked").then((e) => {
    props.setIsDisliked(e);
    props.setDislikedByState((prev) => (prev += 1));
  });
};

export const handleUnDislike = ({ ...props }: IDislikePost) => {
  dislikePostAPI(props.id, "unDislike").then((e) => {
    if (e) props.setIsDisliked(false);
    props.setDislikedByState((prev) => (prev -= 1));
  });
};
