import { IProduct } from '../interface/product';
import { IReview } from "../interface/review";
import Product from "../models/Product";
import Review from "../models/Review";

type product =  null | IProduct



//Create a Review
const setReview = async(items:IReview, productId: string)=>{
    const {rating, comment,userId} = items;
    
    const product:product = await Product.findById(productId);

    
    const review = {
        rating,
        comment,
        userId,
        productId
    }
    
    const createdReview = await Review.create(review);
    
    if(product){
        product.review = [...product.review, createdReview._id]

    }



}