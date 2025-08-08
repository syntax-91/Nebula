import { db } from "../db.js"

export async function dislikeService(data) {
    try {

        console.log('dislikeService - data (7) >> ', data)

        if(data.type == 'disliked'){
            const res = await db.dislikedPost.create({
                data:{
                    username: data.username,
                    postId: data.postId
                }
            })

            console.log('dislikeServie 17')

            return {
                success: res ? true : false,
                msg: res ? 'норм' : 'что-то пошло не так',
            }
        } 

        if(data.type == 'unDislike'){
            const res = await db.dislikedPost.delete({
                where: {
                    username_postId: {
                        username: data.username,
                        postId: data.postId
                    }
                }
            })

            return {
                success: res ? true : false,
                msg: res ? 'норм' : 'что-то пошло не так'
            }
        }

    } catch(err){
        if (err instanceof db.PrismaClientKnownRequestError && err.code === 'P2002'){
            return {
                success:  false,
                msg: 'вы уже поставили дизлайк!'
            }
        }

        console.log('ERROR - func likeService >> ', err)
    }
}


export async function dislikedPostsService(username) {
    try {
        
            const res = await db.dislikedPost.findMany({
                where:{ username: username }
            })

            return {
                success: res ? true : false,
                msg: res ? 'норм' : 'что-то пошло не так',
                res:res
            }

    } catch(err){
        console.log('ERROR - func likedService >> ', err)
    }
}
