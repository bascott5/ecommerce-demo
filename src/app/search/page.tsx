import SearchProducts from "@/components/search-products";
import Filter from "@/components/filter";

interface IParams {
    params: { slug: string },
    searchParams: { [key: string]: string | string[] | undefined }
}

const Page: React.FC<IParams> = ({ params, searchParams }) => {
    const search = searchParams["query"];

    return (
        <div>
            <SearchProducts search={ search } />
            <Filter />
        </div>
    );
}

export default Page;