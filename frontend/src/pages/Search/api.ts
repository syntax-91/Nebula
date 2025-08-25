import axios from "axios";

type TType = "user" | "post" | "all";

export async function QueryAPI(query: string, type: TType) {
  try {
    const res = await axios.get(
      `http://192.168.100.108:3000/query/${query}/${type}`
    );

    if (res.data.success) {
      return res.data.res;
    }
  } catch (err) {
    console.error("ERROR - func QueryAPI >> ", err);
  }
}
