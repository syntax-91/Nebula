import { db } from "../db.js"

export async function lastPostsService() {
    try {
        const res = await db.post.findMany({
            take: 20, // лимит
            orderBy: {
                createdAt: 'desc' // desc - самые новые вервыми
            }
        })

        return res

    } catch(err){
        console.log('ERROR - lastPostsService >> ', err)
    }
}