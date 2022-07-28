export interface User {
    username : string,
    imageUrl : string
}

export interface Product {
    id : number,
    imageId? : number,
    imageUrl? : string,
    name : string,
    user? : User,
    token? : string,
    likes? : number,
    description? : string,
    saved? : boolean,
}