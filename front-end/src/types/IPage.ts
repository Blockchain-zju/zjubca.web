export interface IPageItem{
    name:string,
    link:string
}
export interface IPage{
    [index:number]:IPageItem
}