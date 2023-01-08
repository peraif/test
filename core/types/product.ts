export interface IProductRatingStar {
    id: number;
    status: boolean;
}

export interface IProduct {
    id: number;
    category: string;
    text: string;
    price: string;
    reviews_count: number;
    rating_count: number;
    hit: boolean;
    like: boolean;
}

export enum UpdateProductKeys {
    reviews_count = 'reviews_count',
    rating_count = 'rating_count',
    like = 'like'
}