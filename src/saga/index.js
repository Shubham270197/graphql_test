import { all,takeEvery, put, call  } from 'redux-saga/effects';
import * as act from '../actionTypes';
import ApolloClient,{ gql } from 'apollo-boost';


const api = () =>new Promise(function(resolve,reject){
    const client = new ApolloClient({
        uri : 'https://graphqlzero.almansi.me/api'
    });
    client.query({
        query:gql`
        {
            users {
              data {
               id,
                name,
              },
            }  
            }
        
    `})
    .then(resolve)
    .catch(reject)
}) ;
  

export function* mainFunction(){
    
    const result = yield call(api)
    console.log('hello from saga',result);
    yield put({type:'SUBMIT',payload:result})
}

export function* watcherSaga() {

    yield takeEvery(act.SUBMIT_BUTTON,mainFunction)
}

export default function* rootSaga(){
    yield all([
        watcherSaga(),
        
    ])
}
/*
THIS CODE IS USED FOR FETCH API
  return (fetch("https://graphqlzero.almansi.me/api", {
  "method": "POST",
  "headers": { "content-type": "application/json" },
  "body": JSON.stringify({
    query: `{
      user(id: 1) {
        id
        name
      }
    }`
  })
}).then(res => res.json())
    )
*/