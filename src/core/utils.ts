import {C2D} from "./types";

export function matrix<T>(w: number, h: number, fn: (x: number, y: number) => T) {
    return many(w, x => many(h, y => fn(x, y))).flat();
}

export function many<T>(n: number, fn: (i: number) => T) {
    return [...Array(n | 0)].map((e, i) => fn(i));
}

export function rnd(x = 1, y = 0): number {
    return Math.random() * x + y;
}

export function rndi(x, y = 0): number {
    return rnd(x, y) | 0;
}

export function rndb(x = 0.5): boolean {
    return rnd() > x;
}

export function pick<T>(from:T[]):T {
    return from[rndi(from.length)];
}

export function makeCanvas({width, height}): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
}

export function clearCanvas(ctx: C2D) {
    ctx.clearRect(-1e7, -1e7, 2e7, 2e7);
}