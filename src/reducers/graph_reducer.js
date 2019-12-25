import * as act from '../actions/types'
const INITIAL_STATE = {
    view: '',
    fetchedData:{}
    
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
    // case act.HIDE_BUTTON:
    //     console.log(action,'action')
    //     return{ ...state, view:action.payload}
    case 'FETCHDATA':
        // const { data: dataToShow } = action.payload.data.users
        // const { id } = action.payload.data.users.data.id
        const mainData = action.payload.data.users.data;
        console.log('data yrdhfjmk' ,  mainData)
        return{...state, fetchedData:{...state.fetchedData,...mainData} }
    default:
        return state
    }
    
}