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
      userStore.setSHash(res.data.sHash);

      userStore.setDataMap("username", res.data.additionalData.username);

      userStore.setDataMap("displayName", res.data.additionalData.displayName);
      userStore.setDataMap("bio", res.data.additionalData.bio);

      n("/");
    } else {
      modalStore.run(res.data.msg);
    }

    return res.data;
  } catch (err) {
    console.error("ERROR > REGISTER > ", err);
  }
}
