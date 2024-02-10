"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IOptions {
    [key: string]: object | boolean
}

const Filter: React.FC = () => {
    const [options, setOptions] = useState<IOptions>({
        type: {
            fruit: false,
            vegetable: false,
        },
        color: {
            red: false,
            blue: false,
            green: false,
            purple: false,
            yellow: false
        }
    });
    const params = useSearchParams();
    const search = params.get("query");
    const router = useRouter();

    useEffect(() => {
        let type: string[] = [];
        let color: string[] = [];

        Object.keys(options.type).forEach((key, val) => {
            val ? type.push(key) : null;
        });

        Object.keys(options.color).forEach((key, val) => {
            val ? color.push(key) : null;
        });

        router.push("/search?query=" + search + "&type=" + type.toString() + "&color=" + color.toString());
    }, [options]);

    return (
        <div>
            {Object.keys(options).map(category => (
                <div>
                    <h3>{ category[0].toUpperCase() + category.slice(1) }</h3>
                    {Object.keys(options[category]).map(item => (
                        <label>
                            { item[0].toUpperCase() + item.slice(1) }
                            <input 
                                type="checkbox" 
                                value="fruit" 
                                onChange={(e) => {}}/>
                        </label>
                    ))}
                </div>
            ))}
            <div>
                <h3>Price</h3>
                <input type="text" placeholder="Min $"/>
                <input type="text" placeholder="Max $"/>
                <button>Apply</button>
            </div>
        </div>
    );
}

export default Filter;