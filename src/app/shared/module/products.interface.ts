

// export interface Iproducts{
//     pname: string;
//     pid: string;
//     pstatus: "In Progress" | "Dispatched" | "Delivered";
//     canReturn: number;
// }

import { Observable } from "rxjs";

export interface Iproducts{
        pid: string;
        pname: string;
        pstatus: "In Progress" | "Dispatched" | "Delivered";
        canReturn: number;
        productDescription: string;
        price: number;
        brand: string;
        rating: number;
        images: string;
}

export interface IcanDeactivateComp{
        canDeactive : () => boolean | Observable<boolean> | Promise<boolean>
}