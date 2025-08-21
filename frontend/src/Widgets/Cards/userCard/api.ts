import axios from "axios";
import { serverUrl } from "../../../shared/serverUrl";

export async function userDataAPI(username: string) {
  try {
    const res = await axios.get(`${serverUrl}/user/data/${username}`);

    console.info("ответ от сервера >> ", res.data);

    if (res.data.success) {
      return res.data.res;
    }
  } catch (err) {
    console.error("ERROR - func userDataAPI >> ", err);
  }
}
