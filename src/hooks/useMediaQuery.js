import { useEffect, useState } from "react";

export const useMediaQuery = (query, defaultMatches = window.matchMedia(query)) => {
  const [matches, setMatches] = useState(defaultMatches);

  useEffect(() => {
    const media = window.matchMedia(query);

    media.matches !== matches && setMatches(media.matches);

    const listener = () => setMatches(media.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
};
