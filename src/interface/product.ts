import { IReview } from './review';
export interface IProduct {
    _id:string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: string[];
    slug: string;
    tags:string[];
    title: string;
    review: IReview[]

    createdAt: string,
    updatedAt: string
}

export type ISize = 'XS'| 'S'|'M' |'L'|'XL'|'XXL'|'XXXL';
