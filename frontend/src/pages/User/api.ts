import axios from "axios";
import type { IPosts } from "../../shared/types/types";

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
    const res = await axios.get(
      `http://192.168.100.108:3000/userdata/${username}`
    );

    setPosts(res.data.posts || []);
    ///////////////////////////////////////
    const lastPost = res.data.posts.at(-1);

    setLastPostId(lastPost.id);
  } catch (err) {
    console.error("ERROR - func QueryAPI >> ", err);
  }
}
