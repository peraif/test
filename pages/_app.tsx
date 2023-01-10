import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useEffect, useState} from "react";
import {CartItem, IUpdateCartItems} from "@core/types/cart";
import {AppContext} from "@core/context";
import {IProduct, UpdateProductKeys} from "@core/types/product";
import {ProductsData} from "@data/product";
import {useRouter} from "next/router";
import PagePreloader from "@components/ordinary/PagePreloader";

export default function App({Component, pageProps}: AppProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [products, setProducts] = useState<IProduct[]>(ProductsData);
    const [loadedPage, setLoadedPage] = useState(false);
    const {events} = useRouter();

    const updateCartItems = (id: number, add?: boolean) => {
        setCartItems(prev =>
            prev.map((item) => item.id === id ? ({...item, count: add ? item.count + 1 : item.count - 1}) : item)
        );
    }

    const updateCart = ({id, add, remove, decrease}: IUpdateCartItems) => {
        const item = cartItems.find(x => x.id === id);
        if (add) {
            if (item) {
                updateCartItems(id, true);
            } else {
                setCartItems(prev => prev.concat({id: id, count: 1}));
            }
        }
        if (remove && item) {
            if (item.count > 1 && decrease) {
                updateCartItems(id);
            } else {
                setCartItems(prev => prev.filter((item) => item.id !== id));
            }
        }
    }

    function updateProduct<T>(id: number, key: UpdateProductKeys, value: T) {
        if (products.length && products.find(x => x.id === id)) {
            setProducts(prev => prev.map(product => product.id === id ? ({...product, [key]: value}) : product));
        }
    }

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
            cartItems,
            products,
            updateProduct,
            updateCart
        }}>
            <Component {...pageProps} />
            {loadedPage && <PagePreloader/>}
        </AppContext.Provider>
    );
}
