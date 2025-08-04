import { Router } from "express";
import { loginService } from "../service/user/loginService.js";
import { addUserService } from "../service/user/addUserService.js";

export const AuthRouter = Router();

// auth/login
AuthRouter.post('/login', async(req, res) => {
    const data = await req.body;

    console.log('запрос на auth/login, data >> ', data)

    loginService(data)
    .then(e => {
        res.json({
            success: e.success,
            msg:e.msg
        })
    })
    
})

// auth/register
AuthRouter.post('/register', async(req, res) => {
    const data = await req.body;

    console.log('запрос на auth/register, data >> ', data)

    addUserService(data)
    .then(e => {
        res.json({
            success: e.success,
            msg:e.msg
        })
    })
    
})