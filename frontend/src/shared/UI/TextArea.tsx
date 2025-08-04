import type { SetStateAction } from "react"
import './Styles.scss'

interface props {
    type?: 'text'|'password',
    placeholder?: string,
    value?: string,
    h?:number,
    onChange?: (e:SetStateAction<string>) => void
}


export function TextArea({ value, onChange, ...rest }:props){

    return (
        <textarea 
        placeholder={rest.placeholder}
        className="textarea"
        style={{
            height: rest.h,
            maxHeight: '100%'
        }}
        value={value} 
        onChange={e => 
            onChange && onChange(e.target.value)
        } />
    )
}