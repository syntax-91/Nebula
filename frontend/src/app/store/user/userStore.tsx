import { makeAutoObservable } from "mobx";
import { serverUrl } from "../../../shared/serverUrl";
import axios from "axios";

class UserStore {
  isViewedAnonPosts = Boolean(localStorage.getItem("isViewedAnonPosts"));
  publicHash = localStorage.getItem("publicHash_Nebula") || false;

  isAuth = Boolean(this.publicHash);
  isSession = false;

  dataMap = {
    displayName: "",
    username: "",
    bio: "",
    ava: "",
  };

  setIsSession(v: boolean) {
    this.isSession = v;
  }

  setPublicHash(publicHash: string) {
    localStorage.setItem("publicHash_Nebula", publicHash);
    this.isAuth = true;
  }

  removeData() {
    localStorage.removeItem("publicHash_Nebula");
    this.isAuth = false;
  }

  // setData - string
  setDataMap(t: keyof typeof this.dataMap, v: string) {
    this.dataMap[t] = v;
  }

  toggleIsViewedAnonPosts() {
    this.isViewedAnonPosts = !this.isViewedAnonPosts;
    if (this.isViewedAnonPosts) {
      localStorage.setItem("isViewedAnonPosts", "1");
    } else {
      localStorage.removeItem("isViewedAnonPosts");
    }
  }

  async FetchUserdata() {
    if (userStore.isAuth !== true) return;
    try {
      const res = await axios.get(`${serverUrl}/userdata`);
      this.setLikedPosts(res.data.res);
    } catch (err) {
      console.error("ERROR - api.ts - func likedPosts, err > ", err);
    }
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const userStore = new UserStore();
