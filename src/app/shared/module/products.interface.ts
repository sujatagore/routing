

// export interface Iproducts{
//     pname: string;
//     pid: string;
//     pstatus: "In Progress" | "Dispatched" | "Delivered";
//     canReturn: number;
// }

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