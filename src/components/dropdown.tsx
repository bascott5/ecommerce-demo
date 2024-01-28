import { useEffect, useRef, useState } from "react";

const Dropdown: React.FC = () => {
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
        <div ref={ ref } onClick={() => isOpen(!open)}>

        </div>
    )
}

export default Dropdown;