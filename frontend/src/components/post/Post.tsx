import { IoIosMore } from "react-icons/io";
import type { IPosts } from "../../shared/types/types";
import './styles.scss'
import { useEffect, useState } from "react";
import { userStore } from "../../app/store/user/userStore";
import { observer } from "mobx-react-lite";
import { deletePostAPI, likePostAPI} from "./api";
import { postStore } from "../../app/store/post/postStore";
import { modalStore } from "../../app/store/modalStore";
import { toJS } from "mobx";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { BiLike, BiSolidLike } from "react-icons/bi";

 function Post({ ownerUsername, text, ...rest }:IPosts){

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isClosingMenu, setIsClosingMenu] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

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
        console.log('handleDeletePost - value >> ', rest.id)
         
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

    const handleLike = () => {
        setIsLiked(true)
    }

    const handleUnLike = () => {
        setIsLiked(false)
    }


    return(
        <div className="Post tr2 cp ttb">
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

           {isOpenMenu == true && 
            <div className={`menu tr3 ${isClosingMenu == true ? "fo btt" : "fn"}`}>

                <div className="el tr">
                     пожаловаться
                </div>

                <div 
                onClick={handleCopyLink}
                className="el tr">
                   скопировать ссылку 
                </div>

                {ownerUsername == userStore.dataMap.username && (
                    <div 
                    onClick={handleDeletePost}
                    className="el tr">
                        удалить
                    </div>
                )}

            </div>}

            <p className="content">{text}</p>

            <div className="actions">
                {!isLiked && <BiLike color="#444" onClick={handleLike} />}
                {isLiked && <BiSolidLike color="#fff" onClick={handleUnLike} />}
            </div>

        </div>
    )
}

export default observer(Post)