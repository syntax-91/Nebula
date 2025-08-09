import { IoIosHeartDislike, IoIosMore } from "react-icons/io";
import type { IPosts } from "../../shared/types/types";
import './styles.scss'
import { useEffect, useState } from "react";
import { userStore } from "../../app/store/user/userStore";
import { observer } from "mobx-react-lite";
import { deletePostAPI, dislikePostAPI, likePostAPI, paginationPostsAPI} from "./api";
import { postStore } from "../../app/store/post/postStore";
import { modalStore } from "../../app/store/modalStore";

import { BiLike, BiSolidLike } from "react-icons/bi";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { AiFillDislike, AiOutlineDislike } from "react-icons/ai";
import { Button } from "../../shared/UI/Button";
import { useInView } from "react-intersection-observer";

 function Post({ ownerUsername, text, ...rest }:IPosts){

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isClosingMenu, setIsClosingMenu] = useState(false)
    
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)

    const [likedByState, setLikedByState] = useState(rest._count?.likedBy || 0)
    const [dislikedByState, setDislikedByState] = useState(rest._count?.dislikedBy || 0)


    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    useEffect(() => {
        const isLikedPost = postStore.likedPosts.some(post => post.postId === rest.id)
        setIsLiked(isLikedPost)

        const isDislikedPost = postStore.dislikedPosts.some(post => post.postId === rest.id)
        setIsDisliked(isDislikedPost)

    }, [postStore.likedPosts, postStore.dislikedPosts])

    const toggleIsOpenMenu = () => {
        if(isOpenMenu == true){
            setIsClosingMenu(true)

            setTimeout(() => {
                setIsOpenMenu(false)
                setIsClosingMenu(false)
            }, 300)
        } else {
            setIsOpenMenu(true)
        }
    }

    const handleDeletePost = () => {

        deletePostAPI(rest.id)
        .then(success => {
            if(success == true) {
                postStore.deletePost(rest.id)
            }
        })
    }

    const handleCopyLink = () => {
        
        modalStore.run('скопировано')
        navigator.clipboard.writeText(`http://loclhost:1488/post/${rest.id}`)
    }

   
   // like
    const handleLike = () => {
        likePostAPI(rest.id, 'liked')
        .then(e => {
            setIsLiked(e)
            setLikedByState(prev => prev += 1)
        })
    }

    const handleUnLike = () => {
        likePostAPI(rest.id, 'unlike')
        .then(e => {
            if(e) {
                setIsLiked(false)
                setLikedByState(prev => prev -= 1)
            }
        })
    }

    // dislike
     const handleDislike = () => {
        dislikePostAPI(rest.id, "disliked")
        .then(e => {
            setIsDisliked(e)
            setDislikedByState(prev => prev += 1)
        })
    }

    const handleUnDislike = () => {
        dislikePostAPI(rest.id, "unDislike")
        .then(e => {
            if(e) {
                setIsDisliked(false)
                setDislikedByState(prev => prev -= 1)
            }
        })
    }

    //////////
    useEffect(() => {
        if(inView && rest.id === postStore.lastPostId){
            paginationPostsAPI(rest.id, 15)
        }  
    }, [inView])

    
    return(
        <div ref={ref} className="Post tr2 cp ttb">
           <div className="b1">
                <div className="userData">
                    <div className="ava"></div>
                    <div className="tochka"></div>
                    <p className="username">{ownerUsername}</p>
                </div>

                <div 
                onClick={toggleIsOpenMenu}
                className="menuIcon tr3">
                    <IoIosMore />
                </div> 
           </div>

            {/* menu */}
           {isOpenMenu == true && 
            <div className={`menu tr3 ${isClosingMenu == true ? "fo btt" : "fn"}`}>

                <Button label="пожаловаться" className="el menuEl tr"/>
        

                <Button 
                onClick={handleCopyLink}
                label="скопировать ссылку"
                className="el tr menuEl" />
                   
                

                {ownerUsername == userStore.dataMap.username && (
                    <Button 
                    onClick={handleDeletePost}
                    label="удалить"
                    className="el tr menuEl" />
                )}

            </div>}

            <p className="content">{text}</p>

            <div className="actions">
                
                <div className="likeC">
                    {!isLiked && <BiLike className="likeEl" size={20}  color="#444" onClick={handleLike} />}
                    {isLiked  && <BiSolidLike className="likeEl" size={20} color="#d9d8d8" onClick={handleUnLike} />}


                     <div className="likedByCount">{likedByState}</div>
                </div>

                <div className="likeC">
                    {!isDisliked && <AiOutlineDislike className="likeEl" size={20}  color="#444" onClick={handleDislike} />}
                    {isDisliked  && <AiFillDislike className="likeEl" size={20} color="#d9d8d8" onClick={handleUnDislike} />}

                    <div className="likedByCount">{dislikedByState}</div>
                </div>

            </div>

        </div>
    )
}

export default observer(Post)