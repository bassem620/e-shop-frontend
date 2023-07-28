import React from 'react'

import LeftButton from './LeftButton';
import RightButton from './RightButton';

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import ViewProductDetails from '../../Hook/product/ViewProductDetails';

const ProductGallery = ({id}) => {
    const {images} = ViewProductDetails(id);

    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            <ImageGallery items={images}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}

export default ProductGallery
