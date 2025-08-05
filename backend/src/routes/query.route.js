import { Router } from 'express'
import { QueryService } from '../service/queryService.js';

export const QueryRouter = Router()

// query
QueryRouter.get('/:query/:type', (req,res) => {
    const { query, type } = req.params;

    console.log('запрос на query >> ', query)

    QueryService(query, type)
    .then(e => {
        res.json({
            success: e.success,
            res: e.res
        })
    })
})