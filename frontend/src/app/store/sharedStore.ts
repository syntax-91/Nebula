import axios from "axios";
import { makeAutoObservable } from "mobx";
import { serverUrl } from "../../shared/serverUrl";

class SharedStore {
  isFetchedMap = {
    rightBarMeme: false,
  };

  // rightBar
  isViewedRightBarMeme = Boolean(localStorage.getItem("isViewedRightBarMeme"));
  isViewedRightBarWidgetPhoto = Boolean(
    localStorage.getItem("isViewedRightBarWidgetPhoto")
  );
  RightBarWidgetPhotoUrl = "*";

  constructor() {
    makeAutoObservable(this);
  }

  setIsFeted(t: keyof typeof this.isFetchedMap, v: boolean) {
    this.isFetchedMap[t] = v;
  }

  async FetchRightBarMeme(type: "mound" | "update") {
    try {
      if (this.isFetchedMap.rightBarMeme && type == "mound") return;

      const res = await axios.get(`${serverUrl}/meme`);
      this.isFetchedMap.rightBarMeme = true;
      this.memeUrl = res.data.url;
    } catch (err) {
      console.error("ERROR - sharedStore - FetchRightBarMeme", err);
    }
  }
}

export const sharedStore = new SharedStore();
