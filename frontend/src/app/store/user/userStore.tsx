import { makeAutoObservable } from "mobx";
import cs from 'js-cookie'

class UserStore {

    isAuth = Boolean(cs.get('isAuth_Nebula'));

    dataMap = {
        username: cs.get('username_Nebula')
    }

    setIsAuth(v:boolean){
        this.isAuth = v;
        
        if(v){
           cs.set('isAuth_nebula', 'true', {expires: 30})
        } else {
            cs.remove('isAuth_nebula')
        }
    }

    // setData - string
    setDataMap(t: keyof typeof this.dataMap, v:string){
        this.dataMap[t] = v;
        localStorage.setItem(`${t}_Nebula`, v)
    }


    constructor() {
        makeAutoObservable(this)    
    }
}

export const userStore = new UserStore();