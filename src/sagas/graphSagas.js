import { takeEvery, all, put, call } from 'redux-saga/effects'
import ApolloClient, { gql } from 'apollo-boost';
import * as act  from '../actions/types'



// const fet = () => {
//     return( fetch("https://graphqlzero.almansi.me/api", {
//   "method": "POST",
//   "headers": { "content-type": "application/json" },
//   "body": JSON.stringify({
//     query: `{
//       user(id: 1) {
//         id
//         name
//       }
//     }`
//   })
// }).then(res => res.json())
//     )
// }

const getQuery = () => new Promise(function(resolve,reject){
     const client = new ApolloClient({
        uri: 'https://graphqlzero.almansi.me/api'
    });

  client.query({ query: gql`
    {
        users {
            data{
                id,
                name,
            },
        }
    }
    `})
    .then(resolve)
    .catch(reject)
})

function* getApi(){
    
    const result = yield call(getQuery)
    console.log(result,'resu')
        yield put({ type:'FETCHDATA',payload:result })
    
}
function* watcherSaga(){
    
    yield takeEvery(act.GET_DATA_API, getApi)
}

export default function* rootsaga(){
    yield all([
        
       watcherSaga()
    ])
}