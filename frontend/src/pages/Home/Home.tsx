import { useEffect } from 'react'
import { RightBar } from '../../components/rightBar/rightBar'
import { SideBar } from '../../components/sideBar/sideBar'
import './style.scss'
import { userStore } from '../../app/store/user/userStore'
import { Outlet, useNavigate } from 'react-router-dom'
import { Modal } from '../../components/modal/modal'
import { modalStore } from '../../app/store/modalStore'
import { useMediaQuery } from 'react-responsive'
import MenuPhone from '../../components/menuPhone/menuPhone'


export default function HomePage(){

    const n = useNavigate();

    useEffect(() => {
        if(!userStore.isAuth){
            n(`/login`)
        }
    }, [])

    

    const isM = useMediaQuery({maxWidth: 700})

    return (
        <div className='layOut'>
            <div className="Home">
                {!isM && <SideBar />}
                <div className="outlet">
                    <Outlet />
                </div>
                {isM && <MenuPhone />}
                {!isM && <RightBar />}
            </div>

            {modalStore.isOpenModal && 
            <Modal />}

        </div>
    )
}