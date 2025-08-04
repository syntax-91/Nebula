import type { SetStateAction } from 'react'
import './Styles.scss'

interface props {
    type?: 'text'|'password',
    placeholder?: string,
    value?: string,
    onChange?: (e:SetStateAction<string>) => void
}

export function Input({ 
    type, 
    placeholder = 'Enter text..' ,
     ...rest
}:props)
{

    return (
        <input 
        value={rest.value} 
        onChange={e => rest.onChange && rest.onChange(e.target.value)} 
        className="Input" type={type} 
        placeholder={placeholder} />
    )
}