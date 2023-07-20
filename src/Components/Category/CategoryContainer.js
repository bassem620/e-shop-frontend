import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'

import CategoryCard from './../Category/CategoryCard';

const CategoryContainer = ({categories, loading}) => {

    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"];

    return (
        <Container >
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
            {
                !loading ? (
                categories ? 
                (
                    categories.map( (category, index) => (<CategoryCard key={index} title={category.name} img={category.image} background={colors[Math.floor(Math.random() * 5)]} />))
                ) : <h4>لا يوجد تصنيفات</h4>) :
                <Spinner animation="border" variant="primary" />
            }            
            </Row>
        </Container>
    )
}

export default CategoryContainer
