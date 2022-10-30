import React, {PropsWithChildren} from "react"
import {CanvasContextProvider, useCanvas} from "./CanvasContext";

type CanvasProps = PropsWithChildren<{
    width: number;
    height: number;
}>

export function Canvas(props: CanvasProps) {
    return <CanvasContextProvider>
        <CanvasTag {...props} />
    </CanvasContextProvider>
}

function CanvasTag(props: CanvasProps) {
    const {ctxRef} = useCanvas();
    const installRef = canvas => {
        ctxRef.current = canvas && canvas.getContext('2d');
    };
    return <canvas {...props} ref={installRef}>
        {props.children}
    </canvas>
}