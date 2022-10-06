export interface Item {
    header: string,
    content?: Content[],
    subcontent?: Item[]
}
export interface Content {
    type: 'text' | 'img' | 'code',
    data: string
}
