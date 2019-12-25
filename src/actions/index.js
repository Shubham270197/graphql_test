import * as act  from '../actionTypes';


export const getData = (data) => {
    // database.push(data)
    return {
        type: act.SUBMIT_BUTTON,
        payload: {...data}
    }
}