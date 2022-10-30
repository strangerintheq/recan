import React from "react";
import {Canvas, Img, ImgSrc, matrix, Rect, rnd} from "../core";
import {Texture} from "../core/Texture";

export function Example() {
    const props = {
        width: 500,
        height: 500
    }
    const s = 100
    return <Canvas {...props} >

        <ImgSrc src={'./test.svg'} id={'example-img'} />

        <Texture id={'example-texture'} {...props}>
            {matrix(3, 3, (x, y) => {
                return <Rect x={x * s} y={y * s} width={s} height={s}
                             fill={`hsl(${rnd(360)},55%,55%)`}  key={x+'-'+y}/>
            })}
        </Texture>

        {matrix(5, 5, (x, y) => {
            return <Img x={x * s} y={y * s} width={s} height={s}
                        img={'example-texture'} key={x+'-'+y}/>
        })}
    </Canvas>
}

