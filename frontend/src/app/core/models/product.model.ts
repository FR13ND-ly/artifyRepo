export interface User {
    username : string,
    imageUrl : string
}

export interface Product {
    id : number,
    imageUrl : string,
    name : string,
    user : User,
    likes : number,
    price? : number
}