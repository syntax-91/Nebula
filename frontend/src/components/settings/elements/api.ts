import axios from "axios";
import { serverUrl } from "../../../shared/serverUrl";

interface IChangePsw {
  username: string;
  oldPsw: string;
  newPsw: string;
}

export async function changePswAPI({ ...props }: IChangePsw) {
  try {
    const res = await axios.post(
      `${serverUrl}/user/changePsw/${props.username}/${props.oldPsw}/${props.newPsw}`
    );

    console.log("changePsw res >> ", res.data);

    return {
      success: res.data.success,
      msg: res.data.msg,
    };
  } catch (err) {
    console.error(`ERROR > changePswAPI - ${err}}`);
  }
}
