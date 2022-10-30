import * as React from 'react';
import {createContext, MutableRefObject, PropsWithChildren, useContext, useRef} from 'react';
import {C2D, ImgSrcData} from "./types";

type CanvasContextParams = {
    provided?: MutableRefObject<HTMLCanvasElement>;
};


type CanvasContextData = {
    imagesRef: MutableRefObject<Map<string, ImgSrcData>>;
    ctxRef: MutableRefObject<C2D>;
    layersRef: MutableRefObject<HTMLCanvasElement[]>;
    markDirty();
    ctx(): C2D;
}

const CanvasContext = createContext<CanvasContextData>({} as any);

export const useCanvas = () => {
    return useContext<CanvasContextData>(CanvasContext);
};

function initRef(props: CanvasContextParams) {
    if (!props.provided)
        return null;
    const ctx = props.provided.current.getContext('2d');
    if (!ctx.getTransform().e)
        ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    return ctx
}

export const CanvasContextProvider = (props: PropsWithChildren<CanvasContextParams>) => {

    const imagesRef = useRef(new Map<string, ImgSrcData>())
    const ctxRef = useRef<C2D>(initRef(props));
    const layersRef = useRef<HTMLCanvasElement[]>([]);

    return <CanvasContext.Provider value={{
        markDirty() {
            ctxRef.current.canvas['dirty'] = true;
        },
        layersRef,
        imagesRef,
        ctxRef,
        ctx: () => ctxRef.current
    }}>
        {props.children}
    </CanvasContext.Provider>
};

