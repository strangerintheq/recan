import React from "react";
import {Canvas, Img, ImgSrc, many, matrix, pick, Rect, rndb, rndi} from "../core";
import {Texture} from "../core/Texture";

const palette = ['#606c38', '#283618',
    '#fefae0', '#dda15e', '#bc6c25'];

export function Example() {
    const props = {width: 500, height: 500};
    const s = 100, count = 2;
    return <Canvas {...props} >
        <ImgSrc src={'./test.svg'} id={'example-img'}/>
        {many(count, i => <Texture id={'example-texture' + i} {...props} key={i}>
            {matrix(5, 5, (x, y) => <Rect
                {...imgProps(x, y, s)} fill={pick(palette)}
            />)}
        </Texture>)}
        {matrix(5, 5, (x, y) => <Img
            {...imgProps(x, y, s)} img={rndb(0.9) ?'example-img' :'example-texture' + rndi(count)}
        />)}
    </Canvas>
}

function imgProps(x, y, s) {
    return {key: x + '_' + y, x: x * s, y: y * s, width: s, height: s,}
}

