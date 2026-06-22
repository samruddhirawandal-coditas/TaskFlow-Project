export interface ToastProps{
    msg:string;
    duration?:number;
    onClose:()=>void;
}