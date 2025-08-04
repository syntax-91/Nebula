interface props {
    label?: string,
    bg?: 'bgPrimary'|'bgNone',
    loading?: boolean,
    disabled?: boolean,
    type?: 'submit'|'reset'|'button',
    onClick?: () => void
}

export function Button({
    label = 'label',
    bg = 'bgPrimary',
    disabled,
    type = 'button',
    onClick
}:props){

    return (
        <button 
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`Button cp ${bg}`}>
            {label}
        </button>
    )
}