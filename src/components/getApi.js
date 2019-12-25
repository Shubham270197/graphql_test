import React from 'react'
import { apiData, hideButton } from '../actions'
import  _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux'

const GetApi = () => {
    const dispatch = useDispatch();
    const mapState = useSelector(state => state.graph_reducer)
    const getData = () => {
        // dispatch(hideButton(false))
        dispatch(apiData())
    }
    console.log('treeee',mapState.fetchedData)
    return(
       
        <div>
            <button 
            className="ui button green"
            onClick={getData}
            >
                Click To Fetch Api
            </button>
            {
                
                mapState.fetchedData ? _.map(mapState.fetchedData,(data, key) => {
                return(
                <li key = {key} >{data.name}</li>
                )
                }): null   
            }
        </div>
    );
}
export default GetApi;