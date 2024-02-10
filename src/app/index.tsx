import ProductsContainer from "@/components/products-container";
import { getProducts } from "./api/products/route";

const Index: React.FC = async () => {
    const products = await getProducts();

    return (
        <div>
            <ProductsContainer pages={ typeof products == "object" ? products : [[]] }/>
        </div>
    );
}

export default Index;