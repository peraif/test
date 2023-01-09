import {createContext} from "react";
import {BasketItem, TotalAmountItem} from "@core/types/basket";
import {IProduct, UpdateProductKeys} from "@core/types/product";


interface AppContextInterface {
    addToBasket?: (id: number) => void;
    removeFromBasket?: (id: number, decrease?: boolean) => void;
    basket?: BasketItem[];
    products?: IProduct[];
    updateProduct?: <T>(id: number, key: UpdateProductKeys, value: T) => void;
    totalAmountPriceProducts?: TotalAmountItem[];
    updateTotalAmount?: ({id, total}: TotalAmountItem, decrease?: boolean) => void;
}

export const AppContext = createContext<AppContextInterface>({});