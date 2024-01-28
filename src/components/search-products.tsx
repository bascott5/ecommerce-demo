import { queryByKeywords } from "@/app/api/products/route";
import Products from "./products";

interface Props {
    search: string | null
}

const SearchProducts: React.FC<Props> = async ({ search }: Props) => {
    const results = await queryByKeywords(search as string);

    return (
        <div>
            {results.length > 0 ? results.map(result => (
                <Products products={ result }/>
            )) : (
                <p>Nothing here, try a different search!</p>
            )}
        </div>
    );
}

export default SearchProducts;