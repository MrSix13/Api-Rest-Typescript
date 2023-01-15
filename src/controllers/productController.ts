import { request, Request, Response } from "express";
import { 
    getAllProducts, 
    getProductById,
    setProduct, 
    updateProduct,
    deleteProductById,
} from "../services/productServices";
import { handleHttp } from "../utils/error.handle";


const getProducts = async(req:Request, res:Response)=>{
    try {
            const response = await getAllProducts(req.query);
            res.status(201).json(response)

    } catch (error) {
        handleHttp(res, 'ERROR_GET_PRODUCTS', error)
    }
}

const getProduct = async({params}:Request, res:Response)=>{
    try {
        const {slug} = params;
        const response = await getProductById(slug);
        const data = response ? response : "NOT_FOUND"
        res.status(201).json(data)
    } catch (error) {
        handleHttp(res,'ERROR_GET_PRODUCT', error)
    }
}

const postProduct = async({body}:Request, res:Response)=>{
    try {
        const responseItem = await setProduct(body);
        res.status(200).send(responseItem)
    } catch (error) {
        handleHttp(res,"ERROR_POST_PRODUCT", error)
    }
}

const patchProduct = async({params,body}:Request, res:Response)=>{
    try {
        const {id} = params;
        const response = await updateProduct(id, body)
        res.status(200).json(response)
    } catch (error) {
        handleHttp(res,"ERROR_UPDATE_PRODUCT", error)
    }
}

const deleteProduct = async({params}:Request, res:Response)=>{
    try {
        const {id} = params;
        const response = await deleteProductById(id)
        res.status(200).json(response)
    } catch (error) {
        handleHttp(res,"ERROR_DELETE_PRODUCT", error)
    }
}


export {
    getProducts,
    getProduct,
    postProduct,    
    patchProduct,
    deleteProduct
}