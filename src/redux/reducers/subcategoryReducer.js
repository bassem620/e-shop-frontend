import { ADD_NEW_SUBCATEGORY, GET_ERROR } from "../type";

const initialState = {
    subcategories: [],
    loading: true,
}

const subcategoryReducer = (state = initialState, action) => {
    switch(action.type){
        // case GET_ALL_CATEGORIES:
        //     return {
        //         ...state,
        //         categories: action.payload,
        //         loading: false
        //     }
        case ADD_NEW_SUBCATEGORY:
            return {
                loading: false,
                subcategories: action.payload,
            }
        case GET_ERROR:
            return {
                loading: true,
                subcategories: action.payload,
            }
        default:
            return state;
    }
}

export default subcategoryReducer;