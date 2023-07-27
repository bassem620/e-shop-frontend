import { ADD_NEW_CATEGORY, GET_ALL_CATEGORIES, GET_ERROR } from "../type";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";


export const getAllCategories = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/category?limit=${limit}`);
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: res,
        })
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + err,
        })
    }
}

export const getAllCategoriesPage = (limit, page) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/category?limit=${limit}&page=${page}`);
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: res,
        })
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + err,
        })
    }
}

export const addNewCategory = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage(`/api/v1/category`, formData);
        dispatch({
            type: ADD_NEW_CATEGORY,
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