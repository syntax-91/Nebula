import { makeAutoObservable } from "mobx";

class UserStore {

    isAuth = false;

    dataMap = {
        username: ''
    }

    setIsAuth(v:boolean){
        this.isAuth = v;
    }

    // setData - string
    setDataMap(t: keyof typeof this.dataMap, v:string){
        this.dataMap[t] = v;
    }


    constructor() {
        makeAutoObservable(this)    
    }
}

export const userStore = new UserStore();