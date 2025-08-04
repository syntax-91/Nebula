import { makeAutoObservable } from "mobx";
import type { IPosts } from "../../../shared/types/types";

class PostStoreClass {
    
    posts:IPosts[] = []

    constructor() {
        makeAutoObservable(this)    
    }

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