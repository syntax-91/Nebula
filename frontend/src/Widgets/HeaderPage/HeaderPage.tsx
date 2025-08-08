import { IoChevronBack } from 'react-icons/io5'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'

interface props {
    isBack?: boolean
    ch:ReactNode
}

export function HeaderPage({ch, isBack=false}:props){

    const n = useNavigate()

    const handleBack = () => {
        n(-1)
    }


    return (
    <header className="headerSearch ttb">

        {isBack && 
        <div onClick={handleBack} className="cp block back">
            <IoChevronBack />
            <span>Назад</span>
        </div>}

        <div className="children">
            {ch}
        </div>

    </header>
    )

}