import mongoose, {Schema, model, Model, ObjectId} from 'mongoose';
import { IReview } from '../interface/review';

const reviewSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    comment:{type:String},
    rating:{type:Number},
    productId:{
        type: Schema.Types.ObjectId,
        ref:"Product"
    }
},{
    timestamps:true,
    versionKey:false
})


const Review:Model<IReview> = mongoose.models.Review || model('Review', reviewSchema);

export default Review;