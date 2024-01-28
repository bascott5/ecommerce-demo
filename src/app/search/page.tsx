"use client";
import SearchProducts from "@/components/search-products";
import { useSearchParams } from "next/navigation";

const Page: React.FC = () => {
    const params = useSearchParams();
    const search = params.get("q");

    return (
        <div>
            <SearchProducts search={ search }/>
        </div>
    );
}

export default Page;