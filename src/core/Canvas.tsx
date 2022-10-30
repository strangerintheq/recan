import React, {MutableRefObject, PropsWithChildren, useEffect} from "react"
import {CanvasContextProvider, useCanvas} from "./CanvasContext";

type CanvasProps = PropsWithChildren<{
    width: number;
    height: number;
    provided?: MutableRefObject<HTMLCanvasElement>;
}>

export function Canvas(props: CanvasProps) {
    return <CanvasContextProvider provided={props.provided}>
        <CanvasTag {...props} />
    </CanvasContextProvider>
}

function CanvasTag(props: CanvasProps) {
    const {ctxRef} = useCanvas();

    return props.provided ? <>{props.children}</> :<canvas {...props} ref={canvas => {
        ctxRef.current = canvas && canvas.getContext('2d');
    }}>
        {props.children}
    </canvas>
}