import React, { useEffect } from 'react'

import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'

import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories, getAllCategoriesPage } from '../../redux/actions/categoryAction'

const AllCategoryPage = () => {
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

    return (
        <div style={{minHeight:'670px'}}>
            <CategoryContainer categories={categories.data} loading={loading}/>
            {
                pageCount > 1 ?
                (
                    <Pagination 
                        pageCount={pageCount}
                        onPress={getPage}
                    />
                ) : null
            }
        </div>
    )
}

export default AllCategoryPage
