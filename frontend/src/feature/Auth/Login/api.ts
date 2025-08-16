import type { NavigateFunction } from "react-router-dom";
import type { IUserdataAuth } from "../../../shared/types/types";
import axios from "axios";
import { userStore } from "../../../app/store/user/userStore";
import { modalStore } from "../../../app/store/modalStore";
import type { SetStateAction } from "react";
import { serverUrl } from "../../../shared/serverUrl";

export async function LoginAPI(
  data: IUserdataAuth,
  n: NavigateFunction,
  setIsLoading: (e: SetStateAction<boolean>) => void
) {
  try {
    const res = await axios.post(`${serverUrl}/auth/login`, data);

    console.info("ответ >> ", res.data);
    setIsLoading(false);

    if (res.data.success) {
      userStore.setIsAuth(true);
      userStore.setDataMap("username", data.username);
      n("/");
    } else {
      modalStore.run(res.data.msg);
    }
  } catch (err) {
    console.error("ERROR > LOGIN > ", err);
  }
}
