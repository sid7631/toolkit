import {
    SET_COUNT
} from './types';

export const count_increment = (data) => (dispatch, getState) => {
    dispatch({
        type:SET_COUNT,
        payload: getState().demoReducer.count + 1
    })
}

export const count_decrement = (data) => (dispatch, getState) => {
    dispatch({
        type:SET_COUNT,
        payload: getState().demoReducer.count - 1
    })
}
