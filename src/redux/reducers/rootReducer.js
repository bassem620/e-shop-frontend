import { combineReducers } from "redux"
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer';
import subcategoryReducer from './subcategoryReducer';
import productReducer from "./productReducer";

export default combineReducers({
    allCategories: categoryReducer,
    allSubcategories: subcategoryReducer,
    allBrands: brandReducer,
    allProducts: productReducer,
})