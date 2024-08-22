import { useState, useEffect } from 'react';

/**
 * @param media A media query string
 * @returns Whether the media query matches.
 *
 * @example
 * const isMobile = useMediaQuery("(max-width: 768px)");
 */
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