export interface Item {
    header: string,
    subcontent: SubItem[],
}
export interface SubItem {
    header: string,
    type: 'text' | 'img' | 'code',
    data: string
}
