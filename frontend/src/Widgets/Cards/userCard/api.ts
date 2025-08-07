import axios from "axios";

export async function userDataAPI(username:string){

    try {
        const res = await axios.get(`http://localhost:3000/userdata/${username}`);
           
        console.info('ответ от сервера >> ', res.data)

        if(res.data.success){
        
            return res.data.res
        }

    } catch(err){
        console.error('ERROR - func userDataAPI >> ', err)
    }

    
}