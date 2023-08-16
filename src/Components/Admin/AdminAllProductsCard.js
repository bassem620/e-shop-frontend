import React, { useState } from 'react'
import { Col,Card,Row, Modal, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom'
import { deleteProduct } from '../../redux/actions/productAction';

const AdminAllProductsCard = ({ product }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const handelDelete = async () => {
        await dispatch(deleteProduct(product._id))
        setShow(false);
        window.location.reload();
    }

    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title> <div className='font'>تاكيد الحذف</div></Modal.Title>
                </Modal.Header>
                <Modal.Body><div className='font'>هل انتا متاكد من عملية الحذف للمنتج</div></Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" onClick={handleClose}>
                        تراجع
                    </Button>
                    <Button className='font' variant="dark" onClick={handelDelete}>
                        حذف
                    </Button>
                </Modal.Footer>
            </Modal>
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div onClick={handleShow} className="d-inline item-delete-edit">ازاله</div>
                        <Link to={`/admin/editproduct/${product._id}`} style={{ textDecoration: "none" }}>
                            <div className="d-inline item-delete-edit">تعديل</div>
                        </Link>
                    </Col>
                </Row>
                <Link to={`/products/${product._id}`} style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={product.imageCover} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                                {product.title}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">{product.ratingsQty}</div>
                                <div className="d-flex">
                                    <div className="card-price">{product.priceAfterDiscount >= 1 ?
                                        (<div><span style={{ textDecorationLine: 'line-through' }}>{product.price}</span> {product.priceAfterDiscount}</div>)
                                        : product.price}</div>
                                    <div className="card-currency mx-1">جنيه</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default AdminAllProductsCard
