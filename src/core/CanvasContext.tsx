import * as React from 'react';
import {createContext, MutableRefObject, PropsWithChildren, useContext, useRef} from 'react';
import {C2D, ImgSrcData} from "./types";

type CanvasContextParams = {

};

type CanvasContextData = {
    images: Map<string, ImgSrcData>;
    ctxRef: MutableRefObject<C2D>;
    ctx(): C2D;
}

const CanvasContext = createContext<CanvasContextData>({} as any);

export const useCanvas = () => {
    return useContext<CanvasContextData>(CanvasContext);
};

export const CanvasContextProvider = (props: PropsWithChildren<CanvasContextParams>) => {

    const ctxRef = useRef<C2D>();

    return <CanvasContext.Provider value={{
        images: new Map<string, ImgSrcData>(),
        ctxRef,
        ctx: () => ctxRef.current
    }}>
        {props.children}
    </CanvasContext.Provider>
};

