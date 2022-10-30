export type C2D = CanvasRenderingContext2D;
export type Callback =  () => void
export type ImgSrcData = {
    el: HTMLCanvasElement | HTMLImageElement,
    loaded: boolean;
    callbacks: Callback[];
}