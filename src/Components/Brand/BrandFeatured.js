import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'

import BrandCard from './BrandCard'
import SubTiltle from '../Uitily/SubTiltle'

import HomeBrandHook from '../../Hook/brand/HomeBrandHook';

const BrandFeatured = ({ title, btntitle }) => {
    const [brands, loading] = HomeBrandHook();

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
            {
                    !loading ? 
                    (
                        brands.data ? 
                        (
                            brands.data.slice(0,5).map( (brand, index) => (<BrandCard key={index} img={brand.image} />))
                        ) : <h4>لا يوجد ماركات</h4>
                    ) :<Spinner animation="border" variant="primary" />
                }
            </Row>
        </Container>
    )
}

export default BrandFeatured
