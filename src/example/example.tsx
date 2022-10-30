import React from "react";
import {Canvas, Img, ImgSrc, matrix, Rect, rnd} from "../core";

export function Example() {
    const props = {
        width: 500,
        height: 500
    }
    const s = 10
    return <Canvas {...props} >
        {matrix(100, 100, (x, y) => {
            return <Rect x={x * s} y={y * s} width={s} height={s}
                         fill={`hsl(${rnd(360)},55%,55%)`}  key={x+'-'+y}/>
        })}
        <ImgSrc src={'./test.svg'} id={'example-img'}/>
        {matrix(100, 100, (x, y) => {
            return <Img x={x * s} y={y * s} width={s} height={s}
                        img={'example-img'} key={x+'-'+y}/>
        })}
    </Canvas>
}

