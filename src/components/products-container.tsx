"use client";
import styles from '../app/styles/products.module.css';
import { useEffect, useState } from 'react';
import Products from './products';
import { DataCopy } from '@/app/types';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
    pages: DataCopy[][]
}

const ProductsContainer: React.FC<Props> = ({ pages }: Props) => {
    const router = useRouter();
    const params = useSearchParams();
    const search = params.get("p");
    let pageNum = parseInt(typeof search == "string" ? search : "");
    const [currentPage, setPage] = useState<number>(pageNum | 0);

    useEffect(() => {
        if (currentPage >= 0 && pages.length > currentPage) {
            router.push(`/?p=${ currentPage }`);
        }
    }, [currentPage]);

    return (
        <div>
            <div className={ styles.all }>
                {pages[currentPage].map(product => (
                    <Products products={ product }/>
                ))}
            </div>
            <div className={ styles.arrowContainer }>
                <button className={ styles.arrow } onClick={() => setPage(currentPage - 1)}>&lt;</button>
                <button className={ styles.arrow } onClick={() => setPage(currentPage + 1)}>&gt;</button>
            </div>
        </div>
    )
}

export default ProductsContainer;