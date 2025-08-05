import './Styles.scss'
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Input } from "../../shared/UI/Input";
import { useEffect, useState } from "react";
import { useDebounce } from '../../shared/utils/hooks/useDebounce';
import { QueryAPI } from './api';

export default function SearchPage(){

    const [query, setQuery] = useState('')
    const queryDebounced = useDebounce(query, 300)

    useEffect(() => {
         if( query.length ) QueryAPI(query, 'user')
    }, [queryDebounced])

    const n = useNavigate()

    const handleBack = () => {
        n(-1)
    }

    return(
        <div>
            <div className="headerSearch ttb">

            <div onClick={handleBack} className="cp block back">
                <IoChevronBack />
                <span>Назад</span>
            </div>

            <Input 
            value={query}
            onChange={e => setQuery(e)}

            />

            </div>
        </div>
    )
}