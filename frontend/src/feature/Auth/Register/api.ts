import axios from "axios";
import type { IUserdataAuth } from "../../../shared/types/types";
import { userStore } from "../../../app/store/user/userStore";
import type { NavigateFunction } from "react-router-dom";
import { modalStore } from "../../../app/store/modalStore";
import { serverUrl } from "../../../shared/serverUrl";

export async function RegisterAPI(data: IUserdataAuth, n: NavigateFunction) {
  try {
    const res = await axios.post(`${serverUrl}/auth/register`, data);

    if (res.data.success) {
      userStore.setPublicHash(res.data.publicHash);

      userStore.setDataMap("username", data.username);
      userStore.setDataMap("displayName", data.displayName);

      n("/");
    } else {
      modalStore.run(res.data.msg);
    }

    return res.data;
  } catch (err) {
    console.error("ERROR > REGISTER > ", err);
  }
}
