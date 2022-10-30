export type C2D = CanvasRenderingContext2D;
export type Callback =  () => void
export type ImgSrc = {
    el: HTMLCanvasElement | HTMLImageElement,
    loaded: boolean;
    callbacks: Callback[];
}