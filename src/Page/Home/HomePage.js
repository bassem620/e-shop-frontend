import React from 'react'

import Silder from './../../Components/Home/Silder';
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import ViewHomeProductsHook from '../../Hook/product/ViewHomeProductsHook';

const HomePage = () => {
    const [products] = ViewHomeProductsHook();

    return (
        <div className='font' style={{ minHeight: '670px' }}>
            <Silder />
            <HomeCategory />
            <CardProductsContainer products={products} title="الاكثر مبيعا" btntitle="المزيد" pathText="/products" />
            <DiscountSection />
            <CardProductsContainer products={products} title="احدث الازياء" btntitle="المزيد" pathText="/products" />
            <BrandFeatured title="اشهر الماركات" btntitle="المزيد"  />
        </div>
    )
}

export default HomePage
