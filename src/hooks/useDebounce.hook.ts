import { useEffect, useState } from 'react';

interface UseDebounceResult<T> {
    value: T;
    isDebouncing: boolean;
}

export const useDebounce = <T>(
    value: T,
    delay: number,
): UseDebounceResult<T> => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    const [isDebouncing, setIsDebouncing] = useState(false);

    useEffect(() => {
        setIsDebouncing(true);

        const timer = setTimeout(() => {
            setDebouncedValue(value);
            setIsDebouncing(false);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return {
        value: debouncedValue,
        isDebouncing,
    };
};
