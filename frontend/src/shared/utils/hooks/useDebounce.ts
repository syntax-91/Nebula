import { useEffect, useState } from "react";

export function useDebounce (value:string, delay:number){
    const [text, setText] = useState(value)

    useEffect(() => {
        const t = setTimeout(() => {
            setText(value)
        }, delay)

        return ()  => clearTimeout(t)
    }, [value])

    return text
}