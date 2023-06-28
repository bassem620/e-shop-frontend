import { GET_ALL_CATEGORIES, GET_ERROR } from "../type";
import useGetData from "../../hooks/useGetData";

export const getAllCategories = () => async (dispatch) => {
    try {
        const res = await useGetData("/api/v1/category");
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