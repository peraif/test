import Image from "next/image";
import {useState} from "react";
import {ProductRatingStar} from "@data/product";
import {IProductRatingStar} from "@core/types/product";

interface ProductRatingProps {
    
}

const ProductRating = () => {
    const [statusMark, setStatusMark] = useState(false);
    const [stars, setStars] = useState<IProductRatingStar[]>(ProductRatingStar)

    const handleClick = (id: number) => {

    }

    return (
        <div onClick={() => setStatusMark(!statusMark)}>
            {stars.map((star) => (
                <Image
                    key={star.id}
                    src={star.status ? "/icons/color-star.svg" : "/icons/star.svg"}
                    alt="star"
                    width={14}
                    height={14}
                />
            ))}
        </div>
    );
};

export default ProductRating;