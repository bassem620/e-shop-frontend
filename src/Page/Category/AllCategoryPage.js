import React, { useEffect } from 'react'

import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'

import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories } from '../../redux/actions/categoryAction'

const AllCategoryPage = () => {
    const dispatch = useDispatch();
    
    useEffect( _ => {
        dispatch(getAllCategories());
    },[dispatch])

    const { categories, loading } = useSelector( state => state.allCategories);

    console.log(categories)
    console.log(loading)

    return (
        <div style={{minHeight:'670px'}}>
            <CategoryContainer />
            <Pagination />
        </div>
    )
}

export default AllCategoryPage
