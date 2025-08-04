import axios from "axios"
import { postStore } from "../../app/store/post/postStore";

export async function postsAPI(){
    try {
        
        const res = await axios.get('http://localhost:3000/post/lastPosts');
        postStore.setPosts(res.data.posts)
        console.info('posts >> ', res.data.posts)
        
    } catch(err){
        console.error('ERROR - api.ts - func addPostAPI, err > ', err)
    }
}

export async function deletePostAPI(id:number){
    try {
        const res = await axios.post('http://localhost:3000/post/deletePost', {postId: id});
       return res.data.success

        
    } catch(err){
        console.error('ERROR - api.ts - func addPostAPI, err > ', err)
    }
}