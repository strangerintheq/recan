export function matrix<T>(w: number, h: number, fn: (x: number, y: number) => T) {
    return many(w, x => many(h, y => fn(x, y))).flat();
}

export function many<T>(n: number, fn: (i: number) => T) {
    return [...Array(n | 0)].map((e, i) => fn(i));
}

export function rnd(x = 1): number {
    return Math.random() * x;
}