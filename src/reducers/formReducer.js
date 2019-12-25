//import * as act  from '../actionTypes';

const INITIAL_STATE = {
    data: {}
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SUBMIT':
            console.log('data in reducer',action)
            return {...state,data:{...state.data,...action.payload}};
        default:
            return state;
    }
}