import React from 'react'

import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Uitily/Pagination'

import AllBrandsPageHook from '../../Hook/brand/AllBrandsPageHook';

const AllBrand = () => {
    const [brands, loading, pageCount, getPage] = AllBrandsPageHook();

    return (
        <div style={{minHeight:'670px'}}>
            <BrandContainer brands={brands.data} loading={loading}/>
            <Pagination pageCount={pageCount} onPress={getPage}/>
        </div>
    )
}

export default AllBrand
