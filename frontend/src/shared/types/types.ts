export interface IUserdataAuth {
    username: string,
    password: string
}


export interface IPosts {
    ownerUsername: string,
    text: string
    createdAt:string
    _count?: { likedBy:number, dislikedBy:number }
    id: number
}

