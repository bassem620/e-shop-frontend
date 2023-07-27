import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from '../../redux/actions/productAction';

const ViewHomeProductsHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const allProducts = useSelector((state) => state.allProducts.allProducts)

    let products = [];

    try {
        if (allProducts.data)
            products = allProducts.data.slice(0, 4);
        else
            products = []
    } catch (e) { }

    return [products];
}

export default ViewHomeProductsHook;