import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories } from '../../redux/actions/categoryAction'

const HomeCategoryHook = () => {
    const dispatch = useDispatch();
    
    useEffect( _ => {
        dispatch(getAllCategories());
    },[dispatch])

    const { categories, loading } = useSelector( state => state.allCategories);

    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"];

    return [categories, loading, colors];
}

export default HomeCategoryHook