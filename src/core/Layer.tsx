import * as React from "react";
import {PropsWithChildren, useEffect, useRef} from "react";
import {makeCanvas} from "./utils";
import {Canvas} from "./Canvas";
import {useCanvas} from "./CanvasContext";

type LayerProps = PropsWithChildren<{
    width: number;
    height: number;
    centered?: boolean;
    autoClear?: boolean;
}>;

export function Layer(props: LayerProps) {

    const {children} = props;
    const {layersRef} = useCanvas();
    const canvasRef = useRef<HTMLCanvasElement>(makeCanvas(props));

    useEffect(() => {
        layersRef.current.push(canvasRef.current);
        return () => {
            const i = layersRef.current.indexOf(canvasRef.current);
            layersRef.current.splice(i, 1);
        };
    }, []);

    return <Canvas {...props} provided={canvasRef}>{children}</Canvas>
}