import { Data, DataCopy } from "@/app/types";
import prisma from "../../../../prisma/lib/prisma";

export const getProducts = async () => {
    try {
        let res: Data[] = await prisma.products.findMany();
        let resCopy: DataCopy[] = [];
        res.forEach(product => resCopy.push({
            id: product.id,
            name: product.name,
            price: product.price.toString(),
            description: product.description,
            keywords: product.keywords,
            image: product.image.toString()
        }));

        let resFinal: DataCopy[][] = [];
        let marker = 8;
        for (let i = 1; i <= resCopy.length; i++) {
            if (i == marker) {
                resFinal.push(resCopy.slice(0, i));
                marker+= 8;
            }

            if (i == resCopy.length) {
                resFinal.push(resCopy.slice(marker - 8, resCopy.length))
            }
        }

        return resFinal;

    } catch (err) {
        console.error(err);
    }
}

export const getProductById = async (pageId: number) => {
    try {
        let res: Data | null = await prisma.products.findUnique({
            where: {
                id: pageId
            }
        });
        let resTransfer = res as Data;
        let resCopy: DataCopy = {
            id: resTransfer.id,
            name: resTransfer.name,
            price: resTransfer.price.toString(),
            description: resTransfer.description,
            keywords: resTransfer.keywords,
            image: resTransfer.image.toString()
        };
        return resCopy;
    } catch (e) {
        console.error(e);
    }
}

export const getProductByKeywords = async (productId: number) => {
    try {
        const product = await getProductById(productId);
        let res: Data[] = await prisma.products.findMany({
            where: {
                keywords: {
                    hasSome: product?.keywords
                }
            }
        });
        let resCopy: DataCopy[] = [];
        let i = 0;
        while (i < 3) {
            let originalVal = true;
            const rng = Math.floor(Math.random() * res.length);
            resCopy[i] = {
                id: res[rng].id,
                name: res[rng].name,
                price: res[rng].price.toString(),
                description: res[rng].description,
                keywords: res[rng].keywords,
                image: res[rng].image.toString()
            }
            for (let j = 0; j < resCopy.length - 1; j++) {
                if (resCopy[i].id == resCopy[j].id) originalVal = false;
            }
            if (originalVal && resCopy[i].id != productId) i++;
        }
        return resCopy;
    } catch (e) {
        console.error(e);
    }
}

export const queryByKeywords = async (query: string) => {
    //try {
        const queriedKeywords: string[] = query.replace(/[^\w\s\']|_/g, "").split(" ");
        const res: Data[] = await prisma.products.findMany({
            where: {
                keywords: {
                    hasSome: queriedKeywords
                }
            }
        });
        
        let resCopy: DataCopy[] = [];
        res?.forEach(product => resCopy.push({
            id: product.id,
            name: product.name,
            price: product.price.toString(),
            description: product.description,
            keywords: product.keywords,
            image: product.image.toString()
        }));

        return resCopy;
    /*} catch (e) {
        console.error(e);
    }*/
}