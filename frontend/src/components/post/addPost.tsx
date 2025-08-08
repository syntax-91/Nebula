import { useState } from 'react'
import './styles.scss'
import { TextArea } from '../../shared/UI/TextArea';
import { Button } from '../../shared/UI/Button';
import { userStore } from '../../app/store/user/userStore';
import { socket } from '../../app/socketIo';

export function AddPost(){

    const [text, setText] = useState('');
    
    const handleAddPost = () => {
        setText('');

        const postData = {
            text: text,
            ownerUsername: userStore.dataMap.username
        }
        
        socket.emit('createPost', postData)
    }


    return (
        <div className='addPost'>
            <div 
            className="userdata">
                <div className="ava"></div>
                <div className="tochka"></div>
                <div className="username">{userStore.dataMap.username}</div>
            </div>

            
            <TextArea 
            value={text} 
            onChange={setText} 
            placeholder='Enter text' 
            h={70}
            />

            
            <div className='bottom-block'>
                <Button 
                disabled={!text.trim()}
                className='fn'
                onClick={handleAddPost}
                label='add' 
                />
            </div>

        </div>
    )
}