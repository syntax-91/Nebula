export interface IUserdataAuth {
    username: string,
    password: string
}


export interface IPosts {
    ownerUsername: string,
    text: string
    _count?: { likedBy:number, dislikedBy:number }
    id: number
}

