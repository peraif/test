import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useState} from "react";
import {BasketItem} from "@core/types/basket";
import {AppContext} from "@core/context";
import {IProduct, UpdateProductKeys} from "@core/types/product";
import {ProductsData} from "@data/product";

export default function App({Component, pageProps}: AppProps) {
    const [basket, setBasket] = useState<BasketItem[]>([]);
    const [products, setProducts] = useState<IProduct[]>(ProductsData);

    const addToBasket = (id: number) => {
        if (basket.length && basket.find(x => x.id === id)) {
            setBasket(prev => prev.concat({id: id, count: +1}));
        } else {
            setBasket(prev => prev.concat({id: id, count: 1}))
        }
    }

    const removeFromBasket = (id: number) => {
        if (basket.find(x => x.id === id)) {
            setBasket(prev => prev.filter((item) => item.id !== id));
        }
    }

    function updateProduct<T>(id: number, key: UpdateProductKeys, value: T) {
        if (products.length && products.find(x => x.id === id)) {
            setProducts(prev => prev.map(product => product.id === id ? ({...product, [key]: value}) : product));
        }
    }

    return (
        <AppContext.Provider value={{
            addToBasket,
            removeFromBasket,
            basket,
            products,
            updateProduct,
        }}>
            <Component {...pageProps} />
        </AppContext.Provider>
    );
}
