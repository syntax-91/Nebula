import { useEffect } from 'react'
import './styles.scss'
import { socket } from '../../app/socketIo'
import type { IPosts } from '../../shared/types/types'
import {  postsAPI } from './api'
import { postStore } from '../../app/store/post/postStore'
import { observer } from 'mobx-react-lite'
import  Post  from './Post'

 function Posts(){
 
    useEffect(() => {

        const handleNewPost = (data:IPosts) => {
            console.info('new-post =- socket >> ', data)
            postStore.setNewPost(data)
        }

        socket.on('new-post', handleNewPost)

        return () => {
            socket.off('new-post', handleNewPost)
        }
    }, [])
     
    useEffect(() => {
        postStore.FetchLikedPosts()
        postsAPI()
    }, [])

    useEffect(() => {
        console.info('изменение в postStore/posts')
    }, [postStore.posts])
 
    return (
        <div className="posts">
            {postStore.posts.map(post => (
                <div key={post.id}>
                    <Post 
                    id={post.id}
                    ownerUsername={post.ownerUsername} 
                     text={post.text} 
                    isLiked={postStore.likedPosts.some(e => e.id === post.id)}
                    />
                </div>
            ))} 
        </div>
    )
}

export default observer(Posts)