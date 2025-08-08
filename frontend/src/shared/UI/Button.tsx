interface props {
    label?: string,
    bg?: 'bgPrimary'|'bgNone',
    loading?: boolean,
    disabled?: boolean,
    type?: 'submit'|'reset'|'button',
    onClick?: () => void,
    className?: string
}

export function Button({
    label = 'label',
    bg = 'bgPrimary',
    disabled,
    type = 'button',
    onClick,
    className
}:props){

    return (
        <button 
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`Button ${className} el cp ${bg}`}>
            {label}
        </button>
    )
}