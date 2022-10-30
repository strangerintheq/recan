import {useCanvas} from "./CanvasContext";
import React, {useEffect} from "react";

export function ImgSrc({src, id}) {
    // console.log('ImgSrc '+src)
    const {imagesRef} = useCanvas();

    useEffect(() => {
        console.log('ImgSrc load '+src)
        imagesRef.current.has(id) && imagesRef.current.delete(id);
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
        imagesRef.current.set(id, img);
    }, [id, src]);

    return <></>
}