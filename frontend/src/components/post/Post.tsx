import { IoIosMore } from "react-icons/io";
import type { IPosts } from "../../shared/types/types";
import './styles.scss'
import { useState } from "react";
import { userStore } from "../../app/store/user/userStore";
import { observer } from "mobx-react-lite";
import { deletePostAPI } from "./api";
import { postStore } from "../../app/store/post/postStore";

 function Post({ ownerUsername, text, ...rest }:IPosts){

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const toggleIsOpenMenu = () => {
        if(isOpenMenu == true){
            setIsOpenMenu(false)
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

    return(
        <div className="Post cp ">
           <div className="b1">
                <div className="userData">
                    <div className="ava"></div>
                    <div className="tochka"></div>
                    <p className="username">{ownerUsername}</p>
                    <p className="username">{}</p>
                </div>

                <div 
                onClick={toggleIsOpenMenu}
                className="menuIcon">
                    <IoIosMore />
                </div>
           </div>

           {isOpenMenu == true && 
            <div className="menu tr3 ttb">

                <div className="el tr">
                     пожаловаться
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
        </div>
    )
}

export default observer(Post)