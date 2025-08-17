import axios from "axios";
import { serverUrl } from "../../../shared/serverUrl";

export async function userHashPswAPI(username: string) {
  try {
    const res = await axios.get(`${serverUrl}/${username}`);
    return res.data.hashPsw;
  } catch (err) {
    console.error(`ERROR > userHashPswAPI (settings/elements) - ${err}}`);
  }
}
