import { db } from '../db.js'
import { hash } from 'bcryptjs'

export async function addUserService(data) {
    try {

        const res = await db.user.findFirst({
            where:{
                username: data.username
            } 
        });


        if(res?.username === data.username){
            return {
                success: false,
                msg: 'уже существует..'
            }
        } else {
            console.log('юзер не найдено >')
            console.log('>> ', res)
        }

       const PSW_HASH = await hash(data.password, 12)

       await db.user.create({
            data:{
                username: data.username,
                password: PSW_HASH,
                ava: ''
            }
       })

       return {
         success: true,
         msg: 'успешно'
       }


    } catch(err){
        console.log('ERROR - loginService - func loginService >> ', err)
    }
    
}