import { Router } from "express";
import { addPostService } from "../service/post/addPostService.js";
import { lastPostsService } from "../service/post/lastPostsService.js";
import { deletePostService } from "../service/post/deletePostService.js";

export const PostRouter = Router()

// post/addPost
PostRouter.post('/addPost', (req, res) => {
    const data = req.body;

    addPostService(data)
    .then(e => {
        res.json({
            success: e.success,
            msg: e.msg
        })
    })
})

// post/lastPosts
PostRouter.get('/lastPosts', (req, res) => {
    
    console.log('запрос на post/lastPosts')

    lastPostsService()
    .then(posts => {
        res.json({
            posts: posts
        })
    })
})


// post/deletePost
PostRouter.post('/deletePost', (req, res) => {
    const postId = req.body

    console.log('запрос на post/deletePost - data >> ', postId)

    deletePostService(postId)
    .then(post => {
        res.json({
            success: post.success,
            msg: post.msg
        })
    })
})
