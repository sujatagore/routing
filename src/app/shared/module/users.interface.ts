

// export interface Iusers{
//     userName: string;
//     userId: string;
//     userRole: 'admin' | 'buyer';
// }

export interface Iusers{
    userName: string;
    userId: string;
    userRole: 'admin' | 'buyer';
    userEmail?: string;
    userPhone?: string;
    userAddress?: string;
}