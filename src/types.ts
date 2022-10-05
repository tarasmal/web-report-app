export interface Item{
    header: string,
    content?: Content[]
    subcontent?: Item[],
}

interface Content {
    type: 'text' | 'img' | 'code',
    data: string | undefined
}


