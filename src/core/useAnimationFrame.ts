import {DependencyList, useEffect} from "react";

export function useAnimationFrame(
    callback: (t: number) => void,
    deps: DependencyList = []
) {
    useEffect(() => {
        let handle = requestAnimationFrame(rafLoop);

        function rafLoop(t) {
            callback(t);
            handle = requestAnimationFrame(rafLoop);
        }

        return () => {
            cancelAnimationFrame(handle);
        }
    }, deps);
}