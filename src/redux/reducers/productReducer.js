import { GET_ALL_PRODUCTS, GET_ONE_PRODUCTS, GET_SAME_PRODUCT_CAT,ADD_NEW_PRODUCT, GET_ERROR } from "../type";

const initialState = {
    products: [],
    allProducts: [],
    oneProduct: [],
    sameProducts: [],
    loading: true,
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {
                loading: false,
                allProducts: action.payload,
            }
        case GET_ONE_PRODUCTS:
            return {
                loading: false,
                oneProduct: action.payload,
            }
        case GET_SAME_PRODUCT_CAT:
            return {
                ...state,
                loading: false,
                sameProducts: action.payload,
            }
        case ADD_NEW_PRODUCT:
            return {
                loading: false,
                products: action.payload,
            }
        case GET_ERROR:
            return {
                loading: true,
                products: action.payload,
            }
        default:
            return state;
    }
}

export default productReducer;