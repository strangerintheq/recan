import React, {MutableRefObject, PropsWithChildren} from "react"
import {CanvasContextProvider, useCanvas} from "./CanvasContext";
import {useAnimationFrame} from "./useAnimationFrame";
import {clearCanvas} from "./utils";

type CanvasProps = PropsWithChildren<{
    width: number;
    height: number;
    centered?: boolean;
    provided?: MutableRefObject<HTMLCanvasElement>;
    autoClear?: boolean;
}>

export function Canvas(props: CanvasProps) {
    return <CanvasContextProvider provided={props.provided}>
        <CanvasTag {...props} />
    </CanvasContextProvider>
}

function CanvasTag(props: CanvasProps) {

    const {ctxRef, layersRef, markDirty} = useCanvas();

    useAnimationFrame(() => {
        if (!layersRef.current.some(layer => layer['dirty']))
            return;
        if (props.autoClear)
            clearCanvas(ctxRef.current);
        layersRef.current.forEach(layer => {
            layer['dirty'] = false;
            const {width: w, height: h} = layer;
            ctxRef.current.drawImage(layer, -w / 2, -h / 2, w, h);
        });
        markDirty();
    });

    return props.provided ? <>{props.children}</> : <canvas
        width={props.width} height={props.height}
        ref={canvas => {
            const ctx = ctxRef.current = canvas && canvas.getContext('2d');
            if (ctx && props.centered && !ctx.getTransform().e)
                ctx.translate(canvas.width / 2, canvas.height / 2);
        }}>
        {props.children}
    </canvas>
}