import { Decimal } from "@prisma/client/runtime/library";
import prisma from "../../../../prisma/lib/prisma";

interface Data {
    id: number,
    name: string,
    price: Decimal,
    description: string,
    keywords: string[],
    image: Buffer
}

export const getProducts = async () => {
    try {
        let res: Data[] = await prisma.products.findMany();
        return res;
    } catch (err) {
        console.error(err);
    }
}