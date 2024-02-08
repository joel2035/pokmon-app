
export type Pokemon = {
    id:number,
    name: string,
    response:boolean
}
export interface Teacher {
    name : string,
    prenom:string,
    exp:number,
    like:Pokemon,
    1:number,
}
export  interface  House {
    [key: string | number | symbol ]: string | number | Pokemon | boolean,
}