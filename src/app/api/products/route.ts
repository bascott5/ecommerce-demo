import prisma from "../../../../prisma/lib/prisma";

interface Data {
    id: number,
    name: string,
    value: number,
    description: string
}

export const getProducts = async () => {
    try {
        let res: Data[] = await prisma.products.findMany();
        return res;
    } catch (err) {
        console.error(err);
    }
}