import axios from "axios";
import { serverUrl } from "../../../shared/serverUrl";
import { modalStore } from "../../../app/store/modalStore";
import { userStore } from "../../../app/store/user/userStore";
import type { NavigateFunction } from "react-router-dom";

interface props {
  password: string;
  navigate: NavigateFunction;
}

export async function SessionAPI(props: props) {
  try {
    const publicHash = localStorage.getItem("publicHash_Nebula");

    const res = await axios.post(
      `${serverUrl}/auth/session/${publicHash}/${props.password}`
    );

    console.info(res.data);

    if (res.data.success) {
      userStore.setDataMap("displayName", res.data.additionalData.displayName);
      userStore.setDataMap("username", res.data.additionalData.username);
      userStore.setDataMap("bio", res.data.additionalData.bio);

      userStore.setIsSession(true);
      props.navigate("/");
    } else {
      modalStore.run(res.data.msg);
    }

    return res.data.success;
  } catch (err) {
    console.error("sessionAPI >> ", err);
  }
}
