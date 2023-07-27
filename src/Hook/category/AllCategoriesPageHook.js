import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories, getAllCategoriesPage } from '../../redux/actions/categoryAction'

const AllCategoriesPageHook = () => {
    const dispatch = useDispatch();
    
    const limitPerPage = 2;
    
    useEffect( _ => {
        dispatch(getAllCategories(limitPerPage));
    },[dispatch])

    const { categories, loading } = useSelector( state => state.allCategories);

    // Get page count
    let pageCount = 0;
    if(categories.paginationResult)
        pageCount = categories.paginationResult.numberOfPages

    // Get selected page results
    const getPage = page => {
        dispatch(getAllCategoriesPage(limitPerPage, page));
    }

    return [categories, loading, pageCount, getPage];
}

export default AllCategoriesPageHook