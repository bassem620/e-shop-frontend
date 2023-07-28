/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import mobile from '../../images/mobile.png'
import { getOneProduct, getSameProductCat } from '../../redux/actions/productAction';

const ViewProductDetails = (prodId) => {
    const dispatch = useDispatch();

    useEffect( _ => {
        dispatch(getOneProduct(prodId));
    },[dispatch, prodId])

    const { oneProduct, sameProducts } = useSelector( state  => state.allProducts);

    // Product
    let product = [];
    if (oneProduct)
        product = oneProduct.data;
    else
        product = []

    useEffect( _ => {
        if(product){
            if(product.category){
                dispatch(getSameProductCat(product.category._id));
            }
        }
    },[dispatch, product])

    // Images
    let images = [];
    if(product){
        if(product.images)
            images = product.images.map( img => ({original: img}));
    } else {
        images = [{original: `${mobile}`}];
    }

    // Same products
    let sameCatProducts = sameProducts;
    if(sameProducts)
        sameCatProducts = sameProducts.data;
    else    
        sameCatProducts = [];

    return { product, images, sameCatProducts};
}

export default ViewProductDetails;