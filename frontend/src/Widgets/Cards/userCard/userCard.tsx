import { useEffect, useState } from 'react'
import './styles.scss'
import { userDataAPI } from './api'
import { Button } from '../../../shared/UI/Button'
import { modalStore } from '../../../app/store/modalStore'
import { Modal } from '../../../components/modal/modal'
import  { observer } from 'mobx-react-lite'

interface props {
    username: string
}

interface IUserData {
    username: string
    description?:string
}


 function UserCard({username}:props){

    const [res, setRes] = useState<IUserData>()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        userDataAPI(username)
        .then(userData => {
            setRes(userData)
            setIsLoading(false)
        })
    }, [])

    const handle = () => {
        modalStore.run('пока недоступно')
    }

    return (
        <div>

            {modalStore.isOpenModal && <Modal /> }

                <div className='c ttb'>
                   <div className="b1">
                         <div className='ava'></div>
                        
                        <div>
                            <div className='displayName'>displayName</div>
                            <div className="username">@{res?.username}</div> 
                        </div>

                   </div>
                    
                    <div className="actions"></div>
                    
                    <div className='description'>
                       <p>описания:</p> 

                       <div className="text">{res?.description || 'пусто'}</div>
                    </div>

                <Button onClick={handle} label='подписаиться' />
                </div>

                {isLoading && 
                <div className='c'>
                   <div className="userdata">
                         <div className='ava'></div>
                            <div>displayName</div>
                        <div className="username"></div>
                   </div>
                    <div className="actions"></div>
                    <div>
                       <p>описания</p> 

                       <div className="content"></div>
                    </div>

                <Button bg='bgNone' />
                </div>}
        </div>
    )
}

export default observer(UserCard)