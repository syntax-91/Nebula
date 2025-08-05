import { db } from "./db.js";

export async function QueryService(query, type){
    try {
        const res = await db.user.findMany({
            where: {
                username: {
                    contains: query
                }
            },
            select: {
                username: true,
                ava: true
            }
        });

        return {
            success: true,
            res: res
        }
    } catch(err){
        console.log('ERROR - func QueryService >> ', err)
    }
}