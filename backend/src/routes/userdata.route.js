import { Router } from 'express'
import { userdataService } from '../service/user/userdata.js'

export const UserdataRouter = Router()

UserdataRouter.get('/:username', (req,res) =>{

    const { username } = req.params;
    console.log('запрос на userdata')

    userdataService(username)
    .then(e => {
        res.json({
            success: e.success,
            res: e.res
        })
    })
})