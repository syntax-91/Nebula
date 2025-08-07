import axios from "axios"
import type { IUserdataAuth } from "../../shared/types/types"
import { userStore } from "../../app/store/user/userStore"
import type { NavigateFunction } from "react-router-dom"
import { modalStore } from "../../app/store/modalStore"

export async function LoginAPI(data:IUserdataAuth, n:NavigateFunction){
    try {
        const res = await axios.post('http://localhost:3000/auth/login', data)

       console.info('ответ >> ', res.data);

       if(res.data.success){
            userStore.setIsAuth(true)
            userStore.setDataMap('username', data.username)
            n('/')
       } else {
            modalStore.run(res.data.msg)
       }
 
    } catch(err){
        console.error('ERROR > LOGIN > ',err)
    }
}

export async function RegisterAPI(data:IUserdataAuth, n:NavigateFunction){
    try {
        const res = await axios.post('http://localhost:3000/auth/register', data);

        console.info('ответ >> ', res.data)
        
        if(res.data.success){
            userStore.setIsAuth(true)
            userStore.setDataMap('username', data.username)
            n('/')
       } else {
            modalStore.run(res.data.msg)
       }
    
    } catch(err){
        console.error('ERROR > LOGIN > ',err)
    }
}