import React, {useEffect} from "react";
import {useCanvas} from "./CanvasContext";

export function Rect({x = 0, y = 0, width, height, fill}) {

    const {ctx} = useCanvas()

    useEffect(() => {
        let c = ctx();
        c.fillStyle=fill
        c.fillRect(x, y, width, height)
    }, [x, y, width, height]);

    return <></>
}