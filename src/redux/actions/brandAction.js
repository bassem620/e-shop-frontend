import { ADD_NEW_BRAND, GET_ALL_BRANDS, GET_ONE_BRAND, GET_ERROR } from "../type";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

export const getAllBrands = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/brand?limit=${limit}`);
        dispatch({
            type: GET_ALL_BRANDS,
            payload: res,
        })
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + err,
        })
    }
}

export const getAllBrandsPage = (limit, page) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/brand?limit=${limit}&page=${page}`);
        dispatch({
            type: GET_ALL_BRANDS,
            payload: res,
        })
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + err,
        })
    }
}

export const getOneBrand = id => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/brand/${id}`);
        dispatch({
            type: GET_ONE_BRAND,
            payload: res,
        })
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + err,
        })
    }
}

export const addNewBrand = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage(`/api/v1/brand`, formData);
        dispatch({
            type: ADD_NEW_BRAND,
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