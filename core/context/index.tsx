import {createContext} from "react";
import {CartItem, IUpdateCartItems} from "@core/types/cart";
import {IProduct, UpdateProductKeys} from "@core/types/product";


interface AppContextInterface {
    cartItems?: CartItem[];
    products?: IProduct[];
    updateProduct?: <T>(id: number, key: UpdateProductKeys, value: T) => void;
    updateCart?: ({id, add, remove}: IUpdateCartItems) => void;
}

export const AppContext = createContext<AppContextInterface>({});