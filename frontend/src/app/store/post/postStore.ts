import { makeAutoObservable, reaction } from "mobx";
import type { IPosts } from "../../../shared/types/types";
import axios from "axios";
import { userStore } from "../user/userStore";
import { serverUrl } from "../../../shared/serverUrl";
import { postsAPI } from "../../../components/post/api";

interface ILikedPosts {
  postId: number;
}

class PostStoreClass {
  posts: IPosts[] = [];
  likedPosts: ILikedPosts[] = [];
  dislikedPosts: ILikedPosts[] = [];
  lastPostId = 0;

  isFetched = false;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.posts.length,
      () => {
        console.log("postsLength >> ", this.posts.length);
      }
    );
  }

  setIsFetched(v: boolean) {
    this.isFetched = v;
  }

  setLikedPosts(posts: ILikedPosts[]) {
    console.log("likedPosts >> ", posts);
    this.likedPosts = posts;
  }

  setLikedPost(id: number) {
    this.likedPosts.push({ postId: id });
  }

  setUnLikedPost(id: number) {
    this.likedPosts.filter((post) => post.id !== id);
  }

  ////
  setDislikedPosts(posts: ILikedPosts[]) {
    this.dislikedPosts = posts;
  }

  setDislikedPost(id: number) {
    this.dislikedPosts.push({ postId: id });
  }

  setUnDislikedPost(id: number) {
    this.dislikedPosts.filter((post) => post.postId !== id);
  }

  async FetchPosts() {
    try {
      const res = await axios.get(`${serverUrl}/post/lastPosts`);

      const lastPost = (this.lastPostId = res.data.posts.at(-1));
      this.lastPostId = lastPost.id;

      this.setPosts(res.data.posts);
    } catch (err) {
      console.error("ERROR - api.ts - func likedPosts, err > ", err);
    }
  }

  async FetchLikedPosts() {
    try {
      const res = await axios.get(
        `${serverUrl}/post/likedPosts/${userStore.dataMap.username}`
      );
      this.setLikedPosts(res.data.res);
    } catch (err) {
      console.error("ERROR - api.ts - func likedPosts, err > ", err);
    }
  }

  async FetchDislikedPosts() {
    try {
      const res = await axios.get(
        `${serverUrl}/post/dislikedPosts/${userStore.dataMap.username}`
      );
      this.setDislikedPosts(res.data.res);
    } catch (err) {
      console.error("ERROR - api.ts - func likedPosts, err > ", err);
    }
  }

  //

  setPosts(data: IPosts[]) {
    this.posts = data;
  }

  setNewPost(data: IPosts) {
    this.posts.unshift(data);
  }

  setNewPosts(posts: IPosts[]) {
    posts.map((post) => this.posts.push(post));
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
    console.info("удаление поста!");
  }

  setLastPostId(id: number) {
    this.lastPostId = id;
  }
}

export const postStore = new PostStoreClass();
