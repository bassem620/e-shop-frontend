import useGetData from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { ADD_NEW_SUBCATEGORY, GET_CAT_SUBS, GET_ERROR } from "../type";

export const addNewSubcategory = (data) => async (dispatch) => {
    try {
        const res = await useInsertData(`/api/v1/subCategory`, data);
        dispatch({
            type: ADD_NEW_SUBCATEGORY,
            payload: res,
            loading: true
        })
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + err,
        })
    }
}

export const getCatSubcategories = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/category/${id}/subcategories`);
        dispatch({
            type: GET_CAT_SUBS,
            payload: res,
            loading: true
        })
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + err,
        })
    }
}