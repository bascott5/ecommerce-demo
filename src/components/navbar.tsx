"use client";
import SearchBar from "./search-bar";
import styles from "../app/styles/navbar.module.css";

interface Props {
    children: React.ReactNode
}

const Navbar: React.FC<Props> = ({ children }: Props) => {
    return (
        <div>
            <div className={ styles.container }>
                <ul className={ styles.item }>Categories</ul>
                <ul className={ styles.item }>Featured</ul>
                <ul className={ styles.item }>About</ul>
                <SearchBar />
            </div>
            { children }
        </div>
    );
}

export default Navbar;