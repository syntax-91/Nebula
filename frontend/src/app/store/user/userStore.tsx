import { makeAutoObservable } from "mobx";
import { serverUrl } from "../../../shared/serverUrl";
import axios from "axios";

class UserStore {
  isViewedAnonPosts = Boolean(localStorage.getItem("isViewedAnonPosts"));
  isBlockBackground = Boolean(localStorage.getItem("isBlockBackground"));

  privateHash = localStorage.getItem("privateHash_Nebula") || false;

  isAuth = Boolean(this.privateHash);
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

  setPrivateHash(privateHash: string) {
    localStorage.setItem("privateHash_Nebula", privateHash);
    this.isAuth = true;
  }

  removeData() {
    localStorage.removeItem("privateHash_Nebula");
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

  toggleIsBlockBackground() {
    this.isBlockBackground = !this.isBlockBackground;

    if (this.isBlockBackground) {
      localStorage.setItem("isBlockBackground", "1");
    } else {
      localStorage.removeItem("isBlockBackground");
    }
  }

  async FetchSession() {
    if (this.isAuth !== true && this.isSession !== true) return;
    try {
      console.info(
        "userStore - FetchSession - privateHash > ",
        this.privateHash
      );

      const res = await axios.post(
        `${serverUrl}/auth/session/${this.privateHash}`
      );
      if (res.data.success) {
        this.setDataMap("displayName", res.data.additionalData.displayName);
        this.setDataMap("username", res.data.additionalData.username);
        this.setDataMap("bio", res.data.additionalData.bio);
        //
        //this.setDataMap("ava", res.data.ava)
      }
    } catch (err) {
      console.error("ERROR - async func Session - userStore, err > ", err);
    }
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const userStore = new UserStore();
