"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../app/styles/navbar.module.css";

interface Items {
    name: string,
    href: string
}

interface Props {
    title: string;
    items: Items[];
}

const Dropdown: React.FC<Props> = ({ title, items }: Props) => {
    const [open, isOpen] = useState(false);
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!open) return;
        const handleClick = (e: any) => {
            if (ref.current && !ref.current.contains(e.target)) {
                isOpen(false);
            }
        }
        
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [open]);

    return (
        <div className={ styles.dropdownContainer } onClick={() => isOpen(!open)} onMouseOver={() => isOpen(true)} onMouseOut={() => isOpen(false)}>
            <ul className={ styles.item }>{ title }</ul>
            <div className={ styles.dropdown } style={{ display: open ? "block" : "none" }} ref={ ref }>
                {items.map((item, index) => (
                    <Link className={ styles.dropdownItem } key={ index } href={ item.href }>{ item.name }</Link>
                ))}
            </div>
        </div>
    );
}

export default Dropdown;