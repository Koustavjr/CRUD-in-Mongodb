const express=require('express');

const router=express.Router();
const {getProducts,
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct}=require('../controllers/product.controller')
router.get('/',getProducts);

router.get('/:id',getProduct);

router.post('/:id',postProduct);

router.put('/:id',updateProduct);

router.delete('/:id',deleteProduct);

module.exports=router