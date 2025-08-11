import React from 'react';

 
export function useScreenSize() {
	const [screenSize,set_screenSize] = React.useState<number[]>([0,0]);
    const onResize = React.useCallback(() => { 
		set_screenSize([window.innerWidth, window.innerHeight]);
    }, []);
    React.useEffect(() => {
        window.addEventListener("resize", onResize);
        onResize(); //initial size
        return () => window.removeEventListener("resize", onResize);
    }, [onResize]);
    return screenSize;
}