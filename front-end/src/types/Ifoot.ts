export interface IFootItemContent{
    name:string,
    link:string
}
export interface IFootItem{
    name:string,
    content:IFootItemContent[]
}
export interface IFoot{
    [index:number]:IFootItem
}