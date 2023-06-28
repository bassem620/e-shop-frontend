import { GET_ALL_CATEGORIES, GET_ERROR } from "../type";
import baseUrl from '../../Api/baseURL';

export const getAllCategories = () => async (dispatch) => {
    try {
        const res = await baseUrl.get('/api/v1/category');
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + err,
        })
    }
}