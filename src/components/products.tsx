"use server";
import styles from '../app/styles/products.module.css';
import { getProducts } from "@/app/api/products/route";

const Products: React.FC = async () => {
    const products = await getProducts();
    const bufferToImg = (image: Buffer) => new TextDecoder().decode((new Uint8Array(image)));

    return (
        <div className={ styles.all }>
            {products?.map((products, i) => (
                <div className={ styles.container }>
                    <img src={ bufferToImg(products.image) } alt={ products.name } className={ styles.content } />
                    <div className={styles.box}>
                        <p className={styles.name}>{ products.name }</p>
                        <p className={styles.price}>{ products.price.toFixed() }</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;