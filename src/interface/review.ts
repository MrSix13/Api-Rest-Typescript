import { ObjectId } from "mongoose";

export interface IReview {
    _id: ObjectId;
    userId: string;
    comment: string;
    rating: number;
    productId: string;

    createdAt?:string;
    updatedAt?:string;
}