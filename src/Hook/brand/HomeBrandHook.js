import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { getAllBrands } from '../../redux/actions/brandAction'

const HomeBrandHook = () => {
    const dispatch = useDispatch();
    
    useEffect( _ => {
        dispatch(getAllBrands());
    },[dispatch])

    const { brands, loading } = useSelector( state => state.allBrands);

    return [brands, loading];
}

export default HomeBrandHook;