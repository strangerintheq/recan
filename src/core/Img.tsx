import {useCanvas} from "./CanvasContext";
import React, {useEffect} from "react";

export function Img({x = 0, y = 0, width, height, img}) {

    const {ctx, images} = useCanvas();

    useEffect(() => {
        const imgSrc = images.get(img);
        const draw = () => ctx().drawImage(imgSrc.el, x, y, width, height);
        imgSrc.loaded ? draw() : imgSrc.callbacks.push(draw);
    }, [x, y, width, height]);

    return <></>
}