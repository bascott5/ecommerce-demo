"use client";
import { useState } from "react";
import styles from "../app/styles/navbar.module.css"
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState("");
    const searchParams = useSearchParams();
    const search = searchParams.get(query);
    //const router = useRouter();

    return (
        <form className={ styles.search }>
            <input type="text" onChange={(e) => setQuery(e.target.value)}/>
            <button onClick={() => {}}>Search { search }</button>
        </form>
    )
}

export default SearchBar;