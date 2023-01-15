import { IProduct } from "../interface/product";
import Product from "../models/Product";

//Create a Product
const setProduct = async(item:IProduct)=>{
    const responseInsert = await Product.create(item);
    return responseInsert;
};

//Get All Product
const getAllProducts = async(query:object)=>{
        const responseProducts = await Product.find({});
        return responseProducts;
}

//Get Single Product
const getProductById = async(slug:string)=>{
    const responseProduct = await Product.findOne({slug: slug});
    return responseProduct;
}

const updateProduct = async(id:string, data:IProduct)=>{
    const responseUpdate = await Product.findOneAndUpdate(
        {_id:id},
        data,
        {new:true}
    )
    return responseUpdate;
}

const deleteProductById = async(id:string)=>{
    const responseProduct = await Product.remove({_id:id});
    return responseProduct;
}

export {
    getAllProducts,
    getProductById,
    setProduct,
    updateProduct,
    deleteProductById,

}