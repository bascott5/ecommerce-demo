import { queryByKeywords } from "@/app/api/products/route";
import Products from "./products";
import styles from "../app/styles/search.module.css";

interface Props {
    search: string | null
}

const SearchProducts: React.FC<Props> = async ({ search }: Props) => {
    const results = await queryByKeywords(search as string);

    return (
        <div className={ styles.container }>
            {results.length > 0 ? results.map(result => (
                <Products products={ result }/>
            )) : (
                <p>Nothing here, try a different search!</p>
            )}
        </div>
    );
}

export default SearchProducts;