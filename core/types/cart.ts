export interface CartItem {
    id: number;
    count: number;
}
export interface IUpdateCartItems {
    id: number;
    add?: boolean;
    remove?: boolean;
    decrease?: boolean;
}

export interface TotalAmountItem {
 id: number;
 total: number;
}