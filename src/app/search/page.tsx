"use client";
import { useSearchParams } from "next/navigation";
import SearchProducts from "@/components/search-products";
import Filter from "@/components/filter";

const Page: React.FC = () => {
    const params = useSearchParams();
    let search = params.get("query");

    return (
        <div>
            <SearchProducts search={ search } />
            <Filter />
        </div>
    );
}

export default Page;