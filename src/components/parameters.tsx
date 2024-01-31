"use client";
import { useSearchParams } from "next/navigation";
import SearchProducts from "./search-products";

const Parameters: React.FC = () => {
    const params = useSearchParams();
    let search = params.get("query");

    return (
        <SearchProducts search={ search } />
    );
}

export default Parameters;