import { useParams } from "react-router-dom";
import { HeaderPage } from "../../Widgets/HeaderPage/HeaderPage";
import  UserCard  from "../../Widgets/Cards/userCard/userCard";
import './styles.scss'

export default function UserPage(){

    const  { username }  = useParams()
 
    return (
        <div className="userPage">
            <HeaderPage ch={<h2>{username}</h2>} />            
            
            <div className="center cardContainer">
                <UserCard username={username||''} />
            </div>

        </div>
    )
}