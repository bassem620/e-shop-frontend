import { useInsertData } from "../../hooks/useInsertData";
import { ADD_NEW_SUBCATEGORY, GET_ERROR } from "../type";

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