import {useCanvas} from "./CanvasContext";
import React, {useEffect} from "react";

export function Img({x = 0, y = 0, width, height, img, deps}) {
    // console.log('Img', img)
    const {ctx, imagesRef} = useCanvas();

    useEffect(() => {
        console.log('Img redraw', img)
        const imgSrc = imagesRef.current.get(img);
        const draw = () => ctx().drawImage(imgSrc.el, x, y, width, height);
        imgSrc.loaded ? draw() : imgSrc.callbacks.push(draw);
        // console.log('fen', fen)
    }, [x, y, width, height, ...deps]);
    
    return <></>
}