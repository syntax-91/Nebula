import { userStore } from "../../app/store/user/userStore";

export function logOutU() {
  userStore.removeData();
  location.href = "/";
}
