import Image from "next/image";
import {useContext, useEffect, useState} from "react";
import clsx from "clsx";

import s from "./styles.module.scss";
import {AppContext} from "@core/context";
import {UpdateProductKeys} from "@core/types/product";
import {notifyError, notifySuccess} from "@core/notifications";

interface LikeButtonProps {
    like: boolean;
    productId: string;
}

const LikeButton = ({like, productId}: LikeButtonProps) => {
    const [active, setActive] = useState(like);
    const {updateProduct} = useContext(AppContext);

    const handleClick = () => {
        if (!updateProduct) return;
        updateProduct(productId, UpdateProductKeys.like, !like);
        if (like) {
            notifyError('Товар удален из списка избранных!')
        } else {
            notifySuccess('Товар был успешно добавлен в список избранных!')
        }
    }

    useEffect(() => {
        setActive(like);
    }, [like])

    return (
        <div
            className={clsx(s["like-button"], active && s["like-button__active"])}
            onClick={handleClick}
        >
            <Image src={active ? "/icons/like.svg" : "/icons/like-gray.svg"} alt="like" width={16} height={14}/>
        </div>
    );
};

export default LikeButton;