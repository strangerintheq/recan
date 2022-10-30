import React, {useEffect} from "react";
import {useCanvas} from "./CanvasContext";

type RectProps = {x, y, width, height, fill}

export function Rect(props:RectProps) {
    console.log('Rect')
    const {x = 0, y = 0, width, height, fill} = props;
    const {ctx} = useCanvas()

    useEffect(() => {
        let c = ctx();
        c.fillStyle=fill
        c.fillRect(x, y, width, height)
    }, [x, y, width, height]);

    return <></>
}