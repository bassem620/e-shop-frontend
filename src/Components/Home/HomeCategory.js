import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';

import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';

import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories } from '../../redux/actions/categoryAction'

const HomeCategory = () => {
    const dispatch = useDispatch();
    
    useEffect( _ => {
        dispatch(getAllCategories());
    },[dispatch])

    const { categories, loading } = useSelector( state => state.allCategories);

    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"];

    return (
        <Container>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    !loading ? (
                    categories.data ? 
                    (
                        categories.data.slice(0,5).map( (category, index) => (<CategoryCard key={category.id} title={category.name} img={category.image} background={colors[index]} />))
                    ) : <h4>لا يوجد تصنيفات</h4>) :
                    <Spinner animation="border" variant="primary" />
                }
            </Row>
        </Container>
    )
}

export default HomeCategory
