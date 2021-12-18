import { useEffect, useState } from "react";

export default function useNearScreen (target) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setEntries(entries[0]),
      { rootMargin: "5px" }
    );
    observer.observe(target.current);
    return () => {
      observer.unobserve(target.current);
    };
  }, [target]);
  return { entries };
}
