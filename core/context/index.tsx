import {createContext} from "react";
import {CartItem, IUpdateCartItems} from "@core/types/cart";
import {IProduct, UpdateProductKeys} from "@core/types/product";


interface AppContextInterface {
    cartItems?: CartItem[];
    products?: IProduct[];
    updateProduct?: <T>(id: string, key: UpdateProductKeys, value: T) => void;
    updateCart?: ({id, add, remove}: IUpdateCartItems) => void;
    clearCart?: () => void;
    setProductData?: (value: IProduct) => void;
    productData?: IProduct;
}

export const AppContext = createContext<AppContextInterface>({});