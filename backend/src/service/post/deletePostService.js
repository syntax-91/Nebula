import { db } from "../db.js"

export async function deletePostService(data) {
    try {

        console.log('deletePostService - postId - ', data.postId)
        
        const deleteLikedPost = await db.likedPost.deleteMany({
            where: { postId: data.postId }
        })

        const deleteDisLikedPost = await db.dislikedPost.deleteMany({
            where: { postId: data.postId }
        })

        const res = await db.post.delete({
            where: {
                id: data.postId
            }
        })

        console.log('res >> ', res)

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