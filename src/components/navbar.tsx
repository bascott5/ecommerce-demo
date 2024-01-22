"use client";
import SearchBar from "./search-bar";
import styles from "../app/styles/navbar.module.css";
import Link from "next/link";

interface Props {
    children: React.ReactNode
}

const Navbar: React.FC<Props> = ({ children }: Props) => {
    return (
        <div>
            <div className={ styles.container }>
                <Link href={""}><ul className={ styles.item }>Categories</ul></Link>
                <Link href={"/"}><ul className={ styles.item }>Featured</ul></Link>
                <Link href={""}><ul className={ styles.item }>About</ul></Link>
                <SearchBar />
            </div>
            { children }
        </div>
    );
}

export default Navbar;