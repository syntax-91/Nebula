import { makeAutoObservable } from "mobx";
import cs from "js-cookie";

class UserStore {
  isAuth = cs.get("isAuth_Nebula") || false;
  isViewedAnonPosts = Boolean(localStorage.getItem("isViewedAnonPosts"));

  dataMap = {
    displayName: cs.get("displayName_Nebula"),
    username: cs.get("username_Nebula"),
    bio: cs.get("bio_Nebula"),
    ava: cs.get("ava_Nebula"),
  };

  setIsAuth(v: boolean) {
    this.isAuth = v;

    if (v) {
      cs.set("isAuth_nebula", "true", { expires: 30 });
    } else {
      cs.remove("isAuth_nebula");
    }
  }

  // setData - string
  setDataMap(t: keyof typeof this.dataMap, v: string) {
    this.dataMap[t] = v;
    localStorage.setItem(`${t}_Nebula`, v);
  }

  toggleIsViewedAnonPosts() {
    this.isViewedAnonPosts = !this.isViewedAnonPosts;
    if (this.isViewedAnonPosts) {
      localStorage.setItem("isViewedAnonPosts", "1");
    } else {
      localStorage.removeItem("isViewedAnonPosts");
    }
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const userStore = new UserStore();
