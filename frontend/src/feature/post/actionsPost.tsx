import { AiFillDislike, AiOutlineDislike } from "react-icons/ai";
import { BiLike, BiSolidLike } from "react-icons/bi";
import {
  handleDislike,
  handleLikedPost,
  handleUnDislike,
  handleUnLikedPost,
} from "./handlers";
import type { SetStateAction } from "react";

interface props {
  isLiked: boolean;
  likedByState: number;
  setIsLiked: (e: SetStateAction<boolean>) => void;
  setLikedByState: (e: SetStateAction<number>) => void;

  isDisliked: boolean;
  dislikedByState: number;
  setIsDisliked: (e: SetStateAction<boolean>) => void;
  setDislikedByState: (e: SetStateAction<number>) => void;

  postId: number;
}

export function ActionsPost({ ...props }: props) {
  return (
    <div className="actions">
      {/* like */}
      <div className="likeC">
        {!props.isLiked && (
          <BiLike
            className="likeEl"
            size={20}
            color="#444"
            onClick={() =>
              handleLikedPost({
                id: props.postId,
                setIsLiked: props.setIsLiked,
                setLikedByState: props.setLikedByState,
              })
            }
          />
        )}

        {props.isLiked && (
          <BiSolidLike
            className="unlikeEl"
            size={20}
            color="#d9d8d8"
            onClick={() =>
              handleUnLikedPost({
                id: props.postId,
                setIsDisliked: props.setIsLiked,
                setDislikedByState: props.setLikedByState,
              })
            }
          />
        )}

        <div className="likedByCount">
          {props.likedByState > 0 && props.likedByState}
        </div>
      </div>

      {/* dislike */}
      <div className="dislikeC">
        {!props.isDisliked && (
          <AiOutlineDislike
            className="likeEl"
            size={20}
            color="#444"
            onClick={() =>
              handleDislike({
                id: props.postId,
                setIsDisliked: props.setIsDisliked,
                setDislikedByState: props.setDislikedByState,
              })
            }
          />
        )}
        {props.isDisliked && (
          <AiFillDislike
            className="likeEl"
            size={20}
            color="#d9d8d8"
            onClick={() =>
              handleUnDislike({
                id: props.postId,
                setIsDisliked: props.setIsDisliked,
                setDislikedByState: props.setDislikedByState,
              })
            }
          />
        )}

        <div className="dislikedByCount">
          {props.dislikedByState > 0 && props.dislikedByState}
        </div>
      </div>
    </div>
  );
}
