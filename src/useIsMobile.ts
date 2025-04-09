import React from "react";
import {useScreenSize} from "./useScreenSize";

export function useIsMobile(mobileSize = 900) {
    const screenSize = useScreenSize();
    return React.useMemo(() => {
        return screenSize[0] < mobileSize;
    }, [screenSize, mobileSize]);
}
