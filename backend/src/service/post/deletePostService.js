import { db } from "../db.js"

export async function deletePostService(data) {
    try {

        console.log('deletePostService - postId - ', data.postId)
        
        const res = await db.post.delete({
            where: {
                id: data.postId
            }
        })

        if(res == null){
            return {
                success: false,
                msg: 'что-то пошло не так!'
            }
        }

        return {
            success: true,
            msg: 'успешно!'
        }
    } catch(err){
        console.log('ERROR - deletePostService - err >> ', err)
    }
}