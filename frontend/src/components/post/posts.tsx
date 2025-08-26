import { useEffect, useRef } from "react";
import "./styles.scss";
import { socket } from "../../app/socketIo";
import type { IPosts } from "../../shared/types/types";
import { paginationPostsAPI } from "./api";
import { postStore } from "../../app/store/post/postStore";
import { observer } from "mobx-react-lite";
import Post from "./Post";
import { userStore } from "../../app/store/user/userStore";

function Posts() {
  // socket - new-post
  useEffect(() => {
    const handleNewPost = (data: IPosts) => {
      console.info("new-post =- socket >> ", data);
      postStore.setNewPost(data);
    };

    socket.on("new-post", handleNewPost);

    return () => {
      socket.off("new-post", handleNewPost);
    };
  }, []);

  // fetch
  useEffect(() => {
    if (
      postStore.isFetched !== true &&
      userStore.isAuth &&
      userStore.isSession
    ) {
      postStore.FetchLikedPosts();
      postStore.FetchDislikedPosts();

      // FetchPosts - не трогать
      postStore.FetchPosts();

      postStore.setIsFetched(true);
    } else if (!userStore.isAuth) {
      postStore.FetchPosts();
    }
  }, []);

  return (
    <div className="posts">
      {postStore.posts.map((post) => (
        <div key={post.id}>
          <Post
            paginationFunc={() => paginationPostsAPI(post.id, 15)}
            lastPostId={postStore.lastPostId}
            createdAt={post.createdAt}
            _count={{
              likedBy: post._count?.likedBy || 0,
              dislikedBy: post._count?.dislikedBy || 0,
            }}
            id={post.id}
            ownerUsername={post.ownerUsername}
            text={post.text}
          />
        </div>
      ))}
    </div>
  );
}

export default observer(Posts);
