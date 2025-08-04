import { AddPost } from '../post/addPost'
import  Posts  from '../post/posts'
import './styles.scss'


export function Main(){

    return (
        <div className='main up'>
            <AddPost />
            <Posts />
        </div>
    )
}