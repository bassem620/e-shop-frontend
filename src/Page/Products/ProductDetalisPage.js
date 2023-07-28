import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import CategoryHeader from '../../Components/Category/CategoryHeader'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ViewProductDetails from '../../Hook/product/ViewProductDetails'

const ProductDetalisPage = () => {
    const { id } = useParams();
    const { sameCatProducts } = ViewProductDetails(id);

    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis id={id}/>
                <RateContainer />
                <CardProductsContainer products={sameCatProducts} title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
