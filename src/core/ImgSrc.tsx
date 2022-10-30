import {useCanvas} from "./CanvasContext";
import React, {useEffect} from "react";

export function ImgSrc({src, id}) {

    const {images} = useCanvas();

    useEffect(() => {
        images.has(id) && images.delete(id);
        const img = {
            el: new Image(),
            loaded: false,
            callbacks: []
        };
        img.el.onload = () => {
            img.loaded = true;
            img.callbacks.forEach(cb => cb())
            img.callbacks = [];
        };
        img.el.src = src;
        images.set(id, img);
    }, [id, src]);

    return <></>
}