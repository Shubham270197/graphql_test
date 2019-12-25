import React from 'react';
import { getData } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

    const mapState = useSelector(state => state.formData)
    const dispatch = useDispatch()

    const getDataApp = (e) => {
        
        dispatch(getData())
    }
    return (
        <div>
            <button onClick={() => {getDataApp()}}>See Result</button>
        </div>
    );
}
export default App;