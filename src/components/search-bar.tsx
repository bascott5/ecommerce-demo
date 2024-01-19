"use client";
import styles from "../app/styles/navbar.module.css"
import { useRouter } from "next/router";

const SearchBar: React.FC = () => {
    return (
        <form className={ styles.search }>
            <input type="text" onChange={() => {}}/>
            <button onClick={() => {}}> Search</button>
        </form>
    )
}

export default SearchBar;