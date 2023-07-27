import React from 'react'
import { Container,Row } from 'react-bootstrap'

import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'

const CardProductsContainer = ({title ,btntitle,pathText, products}) => {
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText={pathText}/>
            <Row className='my-2 d-flex justify-content-between'>
                {
                    products &&
                    products.map( (prod, ind) => <ProductCard key={ind} item={prod}/>)
                }
            </Row>
        </Container>
    )
}

export default CardProductsContainer
