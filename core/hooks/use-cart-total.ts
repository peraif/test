import {useContext, useMemo} from "react";
import {AppContext} from "@core/context";
import {TotalAmountItem} from "@core/types/cart";

export function UseCartTotalAmount() {
    const {cartItems, products} = useContext(AppContext);
    const result = useMemo(() => {
        let totalAmounts: TotalAmountItem[] = [];
        cartItems?.forEach((cartItem) => {
            const product = products?.find((product) => product.id === cartItem.id);
            if (product) {
                if (totalAmounts.find((x) => x.id === cartItem.id)) {
                    totalAmounts = totalAmounts.map((x) => x.id === cartItem.id ? ({
                        ...x,
                        total: cartItem.count * parseInt(product.price),
                    }) : x)
                } else {
                    totalAmounts.push({
                        id: cartItem.id,
                        total: cartItem.count * parseInt(product.price),
                    })
                }
            }
        })

        return totalAmounts;
    }, [cartItems])

    return result.reduce((num, item) => num + item.total, 0);
}