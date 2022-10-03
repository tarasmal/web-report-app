export interface Item extends Content{
    header: string,
    subcontent?: SubItem[],
}
interface SubItem extends Content{
    header: string,
}

interface Content {
    type: 'text' | 'img' | 'code' | undefined,
    data: string | undefined
}


