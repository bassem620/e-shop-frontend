import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { ADD_NEW_PRODUCT, GET_ERROR } from "../type";

export const createProduct = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage(`/api/v1/product`, formData);
        dispatch({
            type: ADD_NEW_PRODUCT,
            payload: res,
            loading: true
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + err,
        })
    }
} 