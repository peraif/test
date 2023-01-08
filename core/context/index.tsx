import {createContext} from "react";
import {BasketItem} from "@core/types/basket";
import {IProduct, UpdateProductKeys} from "@core/types/product";


interface AppContextInterface {
    addToBasket?: (id: number) => void;
    removeFromBasket?: (id: number) => void;
    basket?: BasketItem[];
    products?: IProduct[];
    updateProduct?: <T>(id: number, key: UpdateProductKeys, value: T) => void;
}

export const AppContext = createContext<AppContextInterface>({});