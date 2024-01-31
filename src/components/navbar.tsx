"use client";
import SearchBar from "./search-bar";
import Dropdown from "./dropdown";
import styles from "../app/styles/navbar.module.css";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <div>
            <div className={ styles.container }>
                <Dropdown title="Categories" items={[
                    { name: "Fruit", href: "/" },
                    { name: "Vegetables", href: "/" }
                ]} />
                <Link href={"/"}><ul className={ styles.item }>Featured</ul></Link>
                <Link href={""}><ul className={ styles.item }>About</ul></Link>
                <SearchBar />
            </div>
        </div>
    );
}

export default Navbar;