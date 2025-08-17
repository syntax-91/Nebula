import axios from "axios";
import type { IPosts } from "../../shared/types/types";
import { serverUrl } from "../../shared/serverUrl";

interface IUserdata {
  username: string;
  setPosts: IPosts[];
  setLastPostId: number;
}

export async function userDataAPI({
  username,
  setPosts,
  setLastPostId,
}: IUserdata) {
  try {
    const res = await axios.get(`${serverUrl}/user/data/${username}`);

    setPosts(res.data.posts || []);
    ///////////////////////////////////////
    const lastPost = res.data.posts.at(-1);

    setLastPostId(lastPost.id);
  } catch (err) {
    console.error("ERROR - func QueryAPI >> ", err);
  }
}
