"use client";
import styles from '../app/styles/products.module.css';
import { useEffect, useState } from 'react';
import Products from './products';
import { DataCopy } from '@/app/types';
import { useRouter, useSearchParams } from 'next/navigation';

interface IProps {
    pages: DataCopy[][]
}

const ProductsContainer: React.FC<IProps> = ({ pages }: IProps) => {
    const router = useRouter();
    const params = useSearchParams();
    const search = params.get("p");
    let pageNum = parseInt(typeof search == "string" ? search : "0");
    pageNum = pageNum >= 0 && pages.length > pageNum ? pageNum : 0;
    const [currentPage, setPage] = useState<number>(pageNum | 0);

    useEffect(() => {
        router.push(`/?p=${ currentPage }`);
    }, [currentPage]);

    return (
        <div className={ styles.all }>
            <div className={ styles.allContainer }>
                {pages[currentPage].map(product => (
                    <Products products={ product }/>
                ))}
            </div>
            <div className={ styles.arrowContainer }>
                <button className={ styles.arrow } onClick={() => currentPage - 1 >= 0 && pages.length > currentPage - 1 ? setPage(currentPage - 1) : null}>&lt;</button>
                <button className={ styles.arrow } onClick={() => currentPage + 1 >= 0 && pages.length > currentPage + 1 ? setPage(currentPage + 1) : null}>&gt;</button>
            </div>
        </div>
    )
}

export default ProductsContainer;