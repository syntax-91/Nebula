import type { NavigateFunction } from "react-router-dom";
import { userStore } from "../../app/store/user/userStore";

export function logOutU(n:NavigateFunction){
    userStore.setIsAuth(false)
    n('/login')
}