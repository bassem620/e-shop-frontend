import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';

import BrandCard from './BrandCard'

const BrandContainer = ({brands, loading}) => {
    return (
        <Container>
            <div className="admin-content-text mt-2 ">كل الماركات</div>
            <Row className='my-1 d-flex justify-content-between'>
                {
                    !loading ? (
                    brands ? 
                    (
                        brands.map( (brand, index) => (<BrandCard key={index} img={brand.image} />))
                    ) : <h4>لا يوجد ماركات</h4>) :
                    <Spinner animation="border" variant="primary" />
                }  
            </Row>
        </Container>
    )
}

export default BrandContainer
