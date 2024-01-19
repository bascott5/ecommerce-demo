import { getProductById, getProductByKeywords } from "@/app/api/products/route";
import styles from "./product.module.css";
import Products from "@/components/products";

interface Props {
    params: {
        id: string
    }
}

const Page: React.FC<Props> = async ({ params }: Props) => {
    const product = await getProductById(parseInt(params.id));
    let keywordProducts = await getProductByKeywords(parseInt(params.id));

    return (
        <div>
            <div className={ styles.content }>
                <img src={ product?.image.toString() } alt={ product?.name } className={ styles.img } />
                <div className={ styles.container }>
                    <h1 className={ styles.h1 }>{ product?.name }</h1>
                    <button className={ styles.button }>Buy</button>
                    <p className={ styles.price }>{ product?.price }</p>
                    <p className={ styles.p }>{ product?.description }</p>
                </div>
            </div>
            <div className={ styles.flexbox }>
                {keywordProducts?.map((product) => (
                    <Products products={ product } />
                ))}
            </div>
        </div>
    );
}

export default Page;