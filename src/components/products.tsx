"use client"
import { DataCopy } from '@/app/types';
import styles from '../app/styles/products.module.css';
import Link from 'next/link';

type DataTypes = { products: DataCopy }

const Products: React.FC<DataTypes> = ({products}: DataTypes) => {
    return (
        <div className={ styles.container } key={ products?.id }>
            <Link href={"/product/" + products?.id}>
                <img src={ products.image } alt={ products.name } className={ styles.content } />
                <div className={ styles.box }>
                    <p className={ styles.name }>{ products.name }</p>
                    <p className={ styles.price }>{ products.price }</p>
                </div>
            </Link>
        </div>
    )
}

export default Products;