import { makeAutoObservable } from "mobx";
import type { IPosts } from "../../../shared/types/types";
import axios from "axios";
import { userStore } from "../user/userStore";

interface ILikedPosts {
    id: number
}

class PostStoreClass {
    
    posts:IPosts[] = []
    likedPosts:ILikedPosts[] = [];


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

    async FetchLikedPosts(){
         try {
        
            const res = await axios.get(`http://localhost:3000/post/likedPosts/${userStore.dataMap.username}`);
            this.setLikedPosts(res.data.res)
        
            console.info('likedPostsAPI >> ', res.data)
    
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