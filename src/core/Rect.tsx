import React, {useEffect} from "react";
import {useCanvas} from "./CanvasContext";

export function Rect({x = 0, y = 0, width, height, fill}) {

    const {ctx} = useCanvas()

    useEffect(() => {
        ctx().fillStyle=fill
        ctx().fillRect(x, y, width, height)
    }, [x, y, width, height]);


    return <></>
}