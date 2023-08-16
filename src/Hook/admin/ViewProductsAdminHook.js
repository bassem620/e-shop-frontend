import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts, getAllProductsPage } from '../../redux/actions/productAction';

const ViewProductsAdminHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts(5))
    }, [dispatch])

    const allProducts = useSelector((state) => state.allProducts.allProducts)

    const onPress = async (page) => {
        await dispatch(getAllProductsPage(5, page));
    }

    let products = [];
    let pagination = [];
    try {
        if (allProducts.data)
            products = allProducts.data;
        else
            products = []
        if(allProducts.paginationResult)
            pagination =  allProducts.paginationResult.numberOfPages
        else 
            pagination = [];
    } catch (e) { }

    return [products, pagination, onPress];
}

export default ViewProductsAdminHook;