export interface IIntroItem{
    name:string,
    picture:string,
    link:string
}
export interface IIntro{
    [index:number]:IIntroItem
}
export interface IPhotoItem{
    name:string,
    word:string,
    intro:IIntro
}
export interface IPhoto{
    [index:number]:IPhotoItem
}