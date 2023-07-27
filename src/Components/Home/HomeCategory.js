import { Container, Row, Spinner } from 'react-bootstrap';

import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import HomeCategoryHook from '../../Hook/category/HomeCategoryHook';

const HomeCategory = () => {
    const [categories, loading, colors] = HomeCategoryHook();

    return (
        <Container>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    !loading ? 
                    (
                        categories.data ? 
                        (
                            categories.data.slice(0,5).map( (category, index) => (
                                <CategoryCard 
                                    key={index} 
                                    title={category.name} 
                                    img={category.image} 
                                    background={colors[index]} 
                                />
                            ))
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) :<Spinner animation="border" variant="primary" />
                }
            </Row>
        </Container>
    )
}

export default HomeCategory
