import { db } from "../db.js"

export async function paginationService(lastPostId, limit) {
    try {
        const res = await db.post.findMany({
            take: limit,

            cursor: { id: lastPostId },
            skip: 1,
            orderBy: { id: 'desc' }
        })

        return {
            success: res ? true : false,
            res: res
        }

    } catch(err){
        console.log('ERROR - paginationService >> ', err)
    }
}