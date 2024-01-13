import { Decimal } from "@prisma/client/runtime/library";

export interface Data/*Server*/ {
    id: number,
    name: string,
    price: Decimal,
    description: string,
    keywords: string[],
    image: Buffer
}

export interface DataCopy/*Client*/ {
    id: number,
    name: string,
    price: string,
    description: string,
    keywords: string[],
    image: string
}