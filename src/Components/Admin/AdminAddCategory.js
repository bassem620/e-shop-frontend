import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import AddCategoryHook from '../../Hook/category/AddCategoryHook'

const AdminAddCategory = () => {
    const [img, isPressed, name, onChangeName, loading, onImageChange, handleSubmit] = AddCategoryHook();

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div>
                    <div>
                        <label for="upload-photo">
                            <img 
                                src={img}
                                alt=""
                                height="100px"
                                width="120px"
                                style={{ cursor: "pointer"}}
                            />
                        </label>
                        <input
                            type="file"
                            name="photo"
                            onChange={onImageChange}
                            id="upload-photo"
                        />
                    </div>
                    <input
                        type="text"
                        value={name}
                        onChange={onChangeName}
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            { isPressed && loading && <h4>جارى التحميل</h4> }
            <ToastContainer />
        </div>
    )
}

export default AdminAddCategory
