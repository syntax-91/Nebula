import axios from "axios";
import type { IPosts } from "../../shared/types/types";
import { serverUrl } from "../../shared/serverUrl";

interface IUserdata {
  username: string;
  setPosts: IPosts[];
  setLastPostId: number;
}

export async function userDataAPI({ username }: IUserdata) {
  try {
    const res = await axios.get(`${serverUrl}/user/data/${username}`);
    if (res.data.success) {
      return res.data.res;
    }
  } catch (err) {
    console.error("ERROR - func QueryAPI >> ", err);
  }
}
