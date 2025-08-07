export interface IUserdataAuth {
    username: string,
    password: string
}


export interface IPosts {
    ownerUsername: string,
    text: string
    isLiked?:boolean
    id: number
}

