import { ADD_NEW_PRODUCT, GET_ERROR } from "../type";

const initialState = {
    products: [],
    loading: true,
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
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