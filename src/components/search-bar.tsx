"use client";
import { useState } from "react";
import styles from "../app/styles/navbar.module.css"
import Navigate from "./redirect";

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState("");

    return (
        <form className={ styles.search } action={Navigate}>
          <input type="text" placeholder="Search here..." name="query" value={ query } onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;