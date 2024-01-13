"use server";
import styles from '../app/styles/products.module.css';
import { getProducts } from "@/app/api/products/route";
import Products from './products';

const ProductsContainer: React.FC = async () => {
    const products = await getProducts();

    return (
        <div className={ styles.all }>
            {products?.map(products => (
                <Products products={products} />
            ))}
        </div>
    )
}

export default ProductsContainer;