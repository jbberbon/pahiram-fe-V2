import { useState, useEffect } from 'react';

export function useMediaQuery(media: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(media);
        setMatches(mediaQuery.matches);
        const handler = () => setMatches(mediaQuery.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, [media]);

    return matches;
}