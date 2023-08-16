import useDeleteData from '../../hooks/useDeleteData';
import useGetData from '../../hooks/useGetData';
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { GET_ALL_PRODUCTS, GET_ONE_PRODUCTS, GET_SAME_PRODUCT_CAT, ADD_NEW_PRODUCT, DELETE_PRODUCT, GET_ERROR } from "../type";

export const getAllProducts = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/product?limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
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

export const getAllProductsPage = (limit, page) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/product?limit=${limit}&page=${page}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
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

export const getOneProduct = id => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/product/${id}`);
        dispatch({
            type: GET_ONE_PRODUCTS,
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

export const getSameProductCat = id => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/product?limit=4&category=${id}`);
        dispatch({
            type: GET_SAME_PRODUCT_CAT,
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

export const createProduct = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage(`/api/v1/product`, formData);
        dispatch({
            type: ADD_NEW_PRODUCT,
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

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/v1/product/${id}`);
        dispatch({
            type: DELETE_PRODUCT,
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