import { Router } from "express";
import { addPostService } from "../service/post/addPostService.js";
import { lastPostsService } from "../service/post/lastPostsService.js";
import { deletePostService } from "../service/post/deletePostService.js";
import { likedPostsService, likeService } from "../service/post/likeService.js";
import {
  dislikedPostsService,
  dislikeService,
} from "../service/post/dislikeService.js";
import { paginationService } from "../service/post/paginationService.js";

export const PostRouter = Router();

// post/addPost
PostRouter.post("/addPost", (req, res) => {
  const data = req.body;

  addPostService(data).then((e) => {
    res.json({
      success: e.success,
      msg: e.msg,
    });
  });
});

// post/lastPosts
PostRouter.get("/lastPosts", (req, res) => {
  console.log("запрос на post/lastPosts");

  lastPostsService().then((posts) => {
    res.json({
      posts: posts,
    });
  });
});

// post/deletePost
PostRouter.post("/deletePost", (req, res) => {
  const postId = req.body;

  console.log("запрос на post/deletePost - data >> ", postId);

  deletePostService(postId).then((post) => {
    res.json({
      success: post.success,
      msg: post.msg,
    });
  });
});

// post/like
PostRouter.post("/like", (req, res) => {
  const data = req.body;

  console.log("запрос на post/liked - data >> ", data);

  likeService(data).then((post) => {
    res.json({
      success: post.success,
      msg: post.msg,
    });
  });
});

// post/dislike
PostRouter.post("/dislike", (req, res) => {
  const data = req.body;

  console.log("запрос на post/disliked - data >> ", data);

  dislikeService(data).then((post) => {
    res.json({
      success: post.success,
      msg: post.msg,
    });
  });
});

// post/likedPosts
PostRouter.get("/likedPosts/:username", (req, res) => {
  const { username } = req.params;

  console.log("запрос на post/likedPosts - data >> ", username);

  likedPostsService(username).then((posts) => {
    res.json({
      success: posts.success,
      msg: posts.msg,
      res: posts.res,
    });
  });
});

// post/dislikedPosts
PostRouter.get("/dislikedPosts/:username", (req, res) => {
  const { username } = req.params;

  console.log("запрос на post/likedPosts - data >> ", username);

  dislikedPostsService(username).then((posts) => {
    res.json({
      success: posts.success,
      msg: posts.msg,
      res: posts.res,
    });
  });
});

// post/pagination
PostRouter.get("/pagination/:lastPostId/:limit", (req, res) => {
  const { lastPostId, limit } = req.params;

  const lastPostId_Int = Number(lastPostId);
  const limit_Int = Number(limit);

  console.log("запрос на post/pagination - data >> ", lastPostId);

  paginationService(lastPostId_Int, limit_Int).then((xz) => {
    res.json({
      success: xz.success,
      res: xz.res,
    });
  });
});
