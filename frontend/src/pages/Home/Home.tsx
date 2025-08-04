import { useEffect } from 'react'
import { RightBar } from '../../components/rightBar/rightBar'
import { SideBar } from '../../components/sideBar/sideBar'
import './style.scss'
import { userStore } from '../../app/store/user/userStore'
import { useNavigate } from 'react-router-dom'
import { Main } from '../../components/main/Main'
import { socket } from '../../app/socketIo'
import { Modal } from '../../components/modal/modal'
import { modalStore } from '../../app/store/modalStore'


export default function HomePage(){

    const n = useNavigate();

    useEffect(() => {
        socket.emit('hui', 'hui')
    }, [])

    useEffect(() => {
        if(!userStore.isAuth){
            n(`/login`)
        }
    }, [])

    return (
        <div className='layOut'>
            <div className="Home">
                <SideBar />
                <Main />
                <RightBar />
            </div>

            {modalStore.isOpenModal && 
            <Modal />}

        </div>
    )
}