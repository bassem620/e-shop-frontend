import { ADD_NEW_CATEGORY, GET_ALL_CATEGORIES, GET_ONE_CATEGORY, GET_ERROR } from "../type";

const initialState = {
    categories: [],
    oneCategory: [],
    loading: true,
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
        case GET_ONE_CATEGORY:
            return {
                ...state,
                oneCategory: action.payload,
                loading: false
            }
        case ADD_NEW_CATEGORY:
            return {
                loading: false,
                categories: action.payload,
            }
        case GET_ERROR:
            return {
                loading: true,
                categories: action.payload,
            }
        default:
            return state;
    }
}

export default categoryReducer;