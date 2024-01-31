"use client";
import { useState } from "react";
import styles from "../app/styles/navbar.module.css"
import Navigate from "./redirect";
import { useRouter } from "next/navigation";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState("");
    const router = useRouter();

    return (
        <form className={ styles.search } onSubmit={() => router.push(`/search?query=${query}`)}>
          <input type="text" placeholder="Search here..." name="query" value={ query } onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;