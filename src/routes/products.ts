import { Router } from "express";
import { getProducts, getProduct, postProduct, patchProduct, deleteProduct } from "../controllers/productController";

const router = Router();

router.get('/', getProducts);
router.get('/:slug', getProduct);
router.post('/', postProduct);
router.put('/:id',patchProduct);
router.delete('/:id', deleteProduct);

export {router}