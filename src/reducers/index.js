import { combineReducers } from 'redux'
import graph_reducer from './graph_reducer'
const reducers = combineReducers({
    graph_reducer:graph_reducer
})
export default reducers;
