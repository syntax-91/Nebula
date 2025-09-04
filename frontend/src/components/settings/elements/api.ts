import axios from "axios";
import { serverUrl } from "../../../shared/serverUrl";
import { userStore } from "../../../app/store/user/userStore";

interface IChangePsw {
  username: string;
  oldPsw: string;
  newPsw: string;
}

export async function changePswAPI({ ...props }: IChangePsw) {
  try {
    const res = await axios.post(
      `${serverUrl}/user/changePsw/${userStore.privateHash}/${props.oldPsw}/${props.newPsw}`
    );

    return {
      success: res.data.success,
      msg: res.data.msg,
    };
  } catch (err) {
    console.error(`ERROR > changePswAPI - ${err}}`);
  }
}

interface IReportABug {
  text: string;
  username: string;
}

export async function reportABugAPI({ ...props }: IReportABug) {
  try {
    const res = await axios.post(
      `${serverUrl}/spread/reportABug/${props.username}/${props.text}`
    );

    return {
      success: res.data.success,
      msg: res.data.msg,
    };
  } catch (err) {
    console.error(`ERROR > changePswAPI - ${err}}`);
  }
}

interface IChange {
  text: string;
  username: string;
}

//// myProfile
export async function changeDisplayNameAPI({ ...props }: IChange) {
  try {
    const res = await axios.post(
      `${serverUrl}/user/changeDisplayName/${userStore.privateHash}/${props.text}`
    );

    return {
      success: res.data.success,
      msg: res.data.msg,
    };
  } catch (err) {
    console.error(`ERROR > changePswAPI - ${err}}`);
  }
}

export async function changeUsernameAPI({ ...props }: IChange) {
  try {
    const res = await axios.post(
      `${serverUrl}/user/changeUsername/${userStore.privateHash}/${props.text}`
    );

    if (res.data.success) {
      userStore.setDataMap("username", props.text);
    }

    return {
      success: res.data.success,
      msg: res.data.msg,
    };
  } catch (err) {
    console.error(`ERROR > changePswAPI - ${err}}`);
  }
}

export async function changeBioAPI({ ...props }: IChange) {
  try {
    const res = await axios.post(
      `${serverUrl}/user/changeBio/${userStore.privateHash}/${props.text}`
    );

    return {
      success: res.data.success,
      msg: res.data.msg,
    };
  } catch (err) {
    console.error(`ERROR > changeBioAPI - ${err}}`);
  }
}

interface IChangeAva {
  file: File;
  username: string;
}

export async function changeAvaAPI({ ...props }: IChangeAva) {
  try {
    const formData = new FormData();
    formData.append("file", props.file);

    const res = await axios.post(
      `${serverUrl}/user/changeAva/${userStore.privateHash}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("changeBio >> ", res.data);
    userStore.setDataMap("ava", res.data.url);

    return {
      success: res.data.success,
      msg: res.data.msg,
      url: res.data.url,
    };
  } catch (err) {
    console.error(`ERROR > changeAvaAPI - ${err}}`);
  }
}
