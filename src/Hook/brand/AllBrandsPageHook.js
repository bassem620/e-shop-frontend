import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { getAllBrands, getAllBrandsPage } from '../../redux/actions/brandAction'

const AllBrandsPageHook = () => {
    const dispatch = useDispatch();
    
    const limitPerPage = 2;
    
    useEffect( _ => {
        dispatch(getAllBrands(limitPerPage));
    },[dispatch])

    const { brands, loading } = useSelector( state => state.allBrands);

    // Get page count
    let pageCount = 0;
    if(brands.paginationResult)
        pageCount = brands.paginationResult.numberOfPages

    // Get selected page results
    const getPage = page => {
        dispatch(getAllBrandsPage(limitPerPage, page));
    }

    return [brands, loading, pageCount, getPage];
}

export default AllBrandsPageHook