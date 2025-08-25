import axios from "axios";
import { postStore } from "../../app/store/post/postStore";
import { userStore } from "../../app/store/user/userStore";
import { serverUrl } from "../../shared/serverUrl";

export async function postsAPI() {
  try {
    const res = await axios.get(`${serverUrl}/post/lastPosts`);
    postStore.setPosts(res.data.posts);

    const lastPostId = res.data.posts.at(-1);

    //console.log("lastPostId >> ", lastPostId.id);
    postStore.setLastPostId(lastPostId.id);
  } catch (err) {
    console.error("ERROR - api.ts - func postsAPI, err > ", err);
  }
}

export async function deletePostAPI(id: number) {
  try {
    const res = await axios.post(`${serverUrl}/post/deletePost`, {
      postId: id,
    });
    return res.data.success;
  } catch (err) {
    console.error("ERROR - api.ts - func addPostAPI, err > ", err);
  }
}

export async function likePostAPI(id: number, type: "liked" | "unlike") {
  try {
    const res = await axios.post(`${serverUrl}/post/like`, {
      postId: id,
      username: userStore.dataMap.username,
      type: type,
    });

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
    const res = await axios.post(`${serverUrl}/post/dislike`, {
      postId: id,
      username: userStore.dataMap.username,
      type: type,
    });

    console.info(res.data);
    return res.data.success;
  } catch (err) {
    console.error("ERROR - api.ts - func addPostAPI, err > ", err);
  }
}

export async function paginationPostsAPI(lastPostId: number, limit: number) {
  try {
    console.log("pagination global posts");

    const res = await axios.get(
      `${serverUrl}/post/pagination/${lastPostId}/${limit}`
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
