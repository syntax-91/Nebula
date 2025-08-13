import axios from "axios";
import { postStore } from "../../app/store/post/postStore";
import { userStore } from "../../app/store/user/userStore";

export async function postsAPI() {
  try {
    const res = await axios.get("http://192.168.100.108:3000/post/lastPosts");
    postStore.setPosts(res.data.posts);

    const lastPostId = res.data.posts.at(-1);

    console.log("lastPostId >> ", lastPostId.id);
    postStore.setLastPostId(lastPostId.id);
  } catch (err) {
    console.error("ERROR - api.ts - func addPostAPI, err > ", err);
  }
}

export async function deletePostAPI(id: number) {
  try {
    const res = await axios.post(
      "http://192.168.100.108:3000/post/deletePost",
      { postId: id }
    );
    return res.data.success;
  } catch (err) {
    console.error("ERROR - api.ts - func addPostAPI, err > ", err);
  }
}

export async function likePostAPI(id: number, type: "liked" | "unlike") {
  try {
    console.log("handleLike - deletePostAPI ");

    const res = await axios.post("http://192.168.100.108:3000/post/like", {
      postId: id,
      username: userStore.dataMap.username,
      type: type,
    });

    console.log("res >> ", res.data);

    console.info(res.data);
    return res.data.success;
  } catch (err) {
    console.error("ERROR - api.ts - func addPostAPI, err > ", err);
  }
}

export async function dislikePostAPI(
  id: number,
  type: "disliked" | "unDislike"
) {
  try {
    console.log("handleDislike ");

    const res = await axios.post("http://192.168.100.108:3000/post/dislike", {
      postId: id,
      username: userStore.dataMap.username,
      type: type,
    });

    console.log("res >> ", res.data);

    console.info(res.data);
    return res.data.success;
  } catch (err) {
    console.error("ERROR - api.ts - func addPostAPI, err > ", err);
  }
}

export async function paginationPostsAPI(lastPostId: number, limit: number) {
  try {
    console.log("pagination");

    const res = await axios.get(
      `http://192.168.100.108:3000/post/pagination/${lastPostId}/${limit}`
    );
    if (res.data.res) {
      const lastPost = res.data.res.at(-1);

      if (lastPost) {
        console.log(`pagination - lastPostId >> `, lastPost);

        postStore.setNewPosts(res.data.res);
        postStore.setLastPostId(lastPost.id);
      }
    }
  } catch (err) {
    console.error("ERROR - api.ts - func paginationPostsAPI, err > ", err);
  }
}
