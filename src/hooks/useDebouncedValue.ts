import React, {useEffect, useState} from "react";

export function useDebouncedValue<T>(value: T, delay?: number): T {
    const timerRef = React.useRef<any>(null);
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(
            () => setDebouncedValue(value),
            delay || 500,
        );

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebouncedValue;
