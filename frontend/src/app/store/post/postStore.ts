import { makeAutoObservable } from "mobx";
import type { IPosts } from "../../../shared/types/types";
import axios from "axios";
import { userStore } from "../user/userStore";

interface ILikedPosts {
    postId: number
}

class PostStoreClass {
    
    posts:IPosts[] = []
    likedPosts:ILikedPosts[] = [];
    dislikedPosts:ILikedPosts[] = [];


    constructor() {
        makeAutoObservable(this)    
    }

     setLikedPosts(posts:ILikedPosts[]){
        console.log('likedPosts >> ', posts)
        this.likedPosts = posts

    }

    setLikedPost(id:number){
        this.likedPosts.push({id: id})
    }

    setUnLikedPost(id:number){
        this.likedPosts.filter((post) => post.id !== id)
    }

    ////
    setDislikedPosts(posts:ILikedPosts[]){
        console.log('likedPosts >> ', posts)
        this.dislikedPosts = posts
    }

    setDislikedPost(id:number){
        this.dislikedPosts.push({postId: id})
    }

    setUnDislikedPost(id:number){
        this.dislikedPosts.filter((post) => post.postId !== id)
    }

    async FetchLikedPosts(){
         try {
        
            const res = await axios.get(`http://localhost:3000/post/likedPosts/${userStore.dataMap.username}`);
            this.setLikedPosts(res.data.res)
        
            console.info('likedPostsAPI >> ', res.data)
    
        } catch(err){
            console.error('ERROR - api.ts - func likedPosts, err > ', err)
        }
    }

    async FetchDislikedPosts(){
         try {
        
            const res = await axios.get(`http://localhost:3000/post/dislikedPosts/${userStore.dataMap.username}`);
            this.setDislikedPosts(res.data.res)
        
            console.info('dislikedPostsAPI >> ', res.data)
    
        } catch(err){
            console.error('ERROR - api.ts - func likedPosts, err > ', err)
        }
    }
    
    //

    setPosts(data:IPosts[]){
        this.posts = data
    }

    setNewPost(data:IPosts){
        this.posts.unshift(data)
    }

    deletePost(id:number){
        this.posts = this.posts.filter(post => post.id !== id)
        console.info('удаление поста!')
    }
}

export const postStore = new PostStoreClass()