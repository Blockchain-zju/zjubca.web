export interface IProductItem{
    intro?:string,
    display?:string,
    picture:string,
    name:string,
    link:string
}
export interface IProduct{
    [index:number]:IProductItem
}