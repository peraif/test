export interface CartItem {
  id: string;
  count: number;
}
export interface IUpdateCartItems {
  id: string;
  add?: boolean;
  remove?: boolean;
  decrease?: boolean;
  clear?: boolean;
}

export interface TotalAmountItem {
  id: number;
  total: number;
}
