import {useCanvas} from "./CanvasContext";
import React, {PropsWithChildren, useEffect, useRef} from "react";
import {Canvas} from "./Canvas";

type TextureProps = PropsWithChildren<{
    id: string;
    width: number;
    height: number;
}>;

export function Texture(props: TextureProps) {

    const {id, children} = props;
    const {images} = useCanvas();
    const canvasRef = useRef<HTMLCanvasElement>(makeCanvas(props));

    useEffect(() => {
        images.has(id) && images.delete(id);
        images.set(id, {
            el: canvasRef.current,
            loaded: true,
            callbacks: []
        });
    }, [id]);

    return <Canvas {...props} provided={canvasRef}>{children}</Canvas>
}

function makeCanvas({width,height}): HTMLCanvasElement{
    const canvas = document.createElement('canvas');
    canvas['isTexture'] = true;
    canvas.width = width;
    canvas.height = height;
    return canvas
}