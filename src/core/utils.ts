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