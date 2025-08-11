import React from "react";

type calcFunctionType = (d: Date) => string;
/**
 * A custom hook that returns a string representing the time elapsed since a given date.
 * It updates the string in real-time, recalculating the time difference at specified intervals.
 *
 * @param targetDate - The date to calculate the time difference from.
 * @param formatDistanceToNow - external library function to format the distance to now (e.g., from date-fns).
 * @returns A string representing the time elapsed since the target date.
 */
export function useRealtimeAgo(
    targetDate: any,
    formatDistanceToNow?: calcFunctionType,
) {
    const theInterval = React.useRef<number>(-1);
    const calcFunction = React.useRef<calcFunctionType>();
    const [intervalTime, set_intervalTime] = React.useState(1000);
    const [agoText, set_agoText] = React.useState("");

    React.useEffect(() => {
        calcFunction.current = formatDistanceToNow;
    }, [formatDistanceToNow]);

    React.useEffect(() => {
        clearInterval(theInterval.current);
        if (intervalTime > 0)
            theInterval.current = setInterval(
                refreshTheText,
                intervalTime,
            ) as any;
        refreshTheText(false);
        return () => clearInterval(theInterval.current);
    }, [intervalTime, targetDate]);

    /**
     * Refreshes the ago text
     */
    const refreshTheText = React.useCallback(
        (chkTime = true) => {
            if (!(targetDate instanceof Date)) return 0;
            if (typeof calcFunction.current !== "function") return 0;
            set_agoText(calcFunction.current(targetDate));
            if (chkTime) findOptimalReloadTime();
        },
        [targetDate],
    );

    /**
     * finds delta seconds between now and  target date
     * @returns
     */
    function deltaSeconds() {
        if (!(targetDate instanceof Date)) return 0;
        const nowDate = new Date();
        var seconds = (targetDate.getTime() - nowDate.getTime()) / 1000;
        return Math.abs(seconds);
    }

    /**
     * How often should we reload the Ago text?
     * for example 5 Hours ago is not going to change every second but 5 Seconds ago is !
     * @returns optimal refresh time
     */
    function findOptimalReloadTime() {
        const dlt = deltaSeconds();
        let newInterval = -1;
        if (dlt < 60) newInterval = 60000;
        else if (dlt < 60 * 5) newInterval = 60000;
        else newInterval = -1;
        if (intervalTime != newInterval) set_intervalTime(newInterval);
        return newInterval;
    }

    return agoText;
}
