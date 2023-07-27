import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/Uitily/SearchCountResult'
import SideFilter from '../../Components/Uitily/SideFilter'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitily/Pagination'
import ViewSearchProducts from '../../Hook/product/ViewSearchProducts'

const ShopProductsPage = () => {
    const [products] = ViewSearchProducts();

    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult title={`نتجية بحث ${products.length}`} />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                        <CardProductsContainer title="" btntitle="" products={products}/>
                    </Col>
                </Row>
                    <Pagination />
            </Container>
        </div>
    )
}

export default ShopProductsPage
