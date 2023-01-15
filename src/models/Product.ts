import mongoose, {Schema, model, Model} from 'mongoose';
import { IProduct } from '../interface/product';

const productSchema = new Schema({
    description:{type:String, required:true, default:''},
    images:[{type:String}],
    inStock:{type:Number, required:true, default:0},
    price:{type:Number, required:true, default:0},
    sizes:[{
        type:String,
        enum:{
            values: [
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46"
            ],
            message:'{VALUE} no es un tamaño válido'

        }
    }],
    slug:{type:String, required:true, unique:true},
    tags:{type:String},
    title:{type:String, required:true, default:''},
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:"Review"
    }],
    numReviews:{type:Number, requiered:true},
    rating: {type:Number, required:true}

},{
    timestamps:true
});

productSchema.index({title:'text', tags:'text'});

const Product:Model<IProduct> = mongoose.models.Product || model('Product', productSchema);

export default Product;