import axios from "axios";
import { serverUrl } from "../../shared/serverUrl";

type TType = "user" | "post" | "all";

export async function QueryAPI(query: string, type: TType) {
  try {
    const res = await axios.get(`${serverUrl}/query/${query}/${type}`);

    if (res.data.success) {
      return res.data.res;
    }
  } catch (err) {
    console.error("ERROR - func QueryAPI >> ", err);
  }
}
