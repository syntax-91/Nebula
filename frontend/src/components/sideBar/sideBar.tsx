import { GoHome, GoHomeFill } from 'react-icons/go'
import { CiLogout, CiSearch, CiSettings } from 'react-icons/ci'
import {  IoIosNotificationsOutline } from 'react-icons/io'
import './style.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { logOutU } from '../../shared/utils/logout'

export function SideBar(){
    
    const n = useNavigate()
    const l = useLocation();

    const handleNavigate = (path:string) => {
        n(path)
    }

    return (
        <div className="sideBar ttb">
            <div className='menu'>
                {/* Home */}
                <div 
                onClick={()=>handleNavigate('/')}
                className='el cp'>
                    {l.pathname == '/' ? <GoHomeFill size={30} />:<GoHome size={30} />}
                    <p>Home</p>
                </div>

                {/* Search */}
                <div 
                onClick={()=>handleNavigate('search')}
                className='el cp'>
                    <CiSearch size={30} />
                    <p>Search</p>
                </div>

                {/* Noti */}
                <div 
                onClick={()=>handleNavigate('noti')}
                className='el cp'>
                    <IoIosNotificationsOutline size={30} />
                    <p>Notifications</p>
                </div>

                {/* Settings */}
                <div 
                onClick={()=>handleNavigate('settings')}
                className='el cp'>
                    <CiSettings size={30} />
                    <p>Settings</p>
                </div>

                 {/* Logout */}
                <div 
                onClick={() => logOutU(n)}
                className='el cp'>
                    <CiLogout size={30} />
                    <p>Logout</p>
                </div>

            </div>
        </div>
    )
}