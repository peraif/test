import Image from "next/image";
import {useState} from "react";
import clsx from "clsx";

import s from "./styles.module.scss";

const LikeButton = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div
            className={clsx(s["like-button"], active && s["like-button__active"])}
            onClick={handleClick}
        >
            <Image src={active ? "/icons/like-red.svg" : "/icons/like.svg"} alt="like" width={16} height={14} />
        </div>
    );
};

export default LikeButton;