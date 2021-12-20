import { useEffect, useState } from "react";

export default function useNearScreen (target = null) {
    console.log(target);
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => setEntries(entries[0]),
            { rootMargin: "10px" }
        );
        if (target.current) {
            observer.observe(target.current);
        }

        return () => {
            if (target.current) {
                observer.unobserve(target.current);
            }
        };
    }, [target ? target.current : null]);
    return { entries };
}
