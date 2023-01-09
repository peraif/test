import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useEffect, useState} from "react";
import {BasketItem, TotalAmountItem} from "@core/types/basket";
import {AppContext} from "@core/context";
import {IProduct, UpdateProductKeys} from "@core/types/product";
import {ProductsData} from "@data/product";
import {useRouter} from "next/router";
import PagePreloader from "@components/ordinary/PagePreloader";

export default function App({Component, pageProps}: AppProps) {
    const [basket, setBasket] = useState<BasketItem[]>([]);
    const [products, setProducts] = useState<IProduct[]>(ProductsData);
    const [totalAmountPriceProducts, setTotalAmountPriceProducts] = useState<TotalAmountItem[]>([]);
    const [loadedPage, setLoadedPage] = useState(false);
    const {events} = useRouter();

    const addToBasket = (id: number) => {
        if (basket.length && basket.find(x => x.id === id)) {
            setBasket(prev =>
                prev.map((item) => item.id === id ? ({...item, count: item.count + 1}) : item)
            );
        } else {
            setBasket(prev => prev.concat({id: id, count: 1}))
        }
    }

    const removeFromBasket = (id: number, decrease?: boolean) => {
        if (basket.find(x => x.id === id && x.count > 1 && decrease)) {
            setBasket(prev => prev.map((item) => item.id === id ? ({...item, count: item.count - 1}) : item));
        } else {
            setBasket(prev => prev.filter((item) => item.id !== id));
        }
    }

    function updateProduct<T>(id: number, key: UpdateProductKeys, value: T) {
        if (products.length && products.find(x => x.id === id)) {
            setProducts(prev => prev.map(product => product.id === id ? ({...product, [key]: value}) : product));
        }
    }

    const updateTotalAmount = (totalItem: TotalAmountItem, decrease?: boolean) => {
        console.log(totalItem)
        if (totalAmountPriceProducts.length && totalAmountPriceProducts.find((item) => item.id === totalItem.id)) {
            setTotalAmountPriceProducts(prev =>
                prev.map((item) => item.id === totalItem.id ? ({...item, total: totalItem.total}) : item)
            )
        } else if (!decrease) {
            setTotalAmountPriceProducts(prev => prev.concat({id: totalItem.id, total: totalItem.total}))
        } else {
            setTotalAmountPriceProducts(prev => prev.filter(item => item.id !== totalItem.id));
        }
    };

    useEffect(() => {
        events.on("routeChangeStart", () => setLoadedPage(true));
        events.on("routeChangeComplete", () => setLoadedPage(false));

        return () => {
            events.off("routeChangeStart", () => setLoadedPage(false));
            events.off("routeChangeComplete", () => setLoadedPage(true));
        };
    }, [events])

    return (
        <AppContext.Provider value={{
            addToBasket,
            removeFromBasket,
            basket,
            products,
            updateProduct,
            totalAmountPriceProducts,
            updateTotalAmount
        }}>
            <Component {...pageProps} />
            {loadedPage && <PagePreloader/>}
        </AppContext.Provider>
    );
}
