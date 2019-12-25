import * as act from './types'

// export const  hideButton = (view) => {
//     console.log(view,'view is')
//     return{
//         type: act.HIDE_BUTTON,
//         payload: view
//     }
// }

export const apiData = () => {
    console.log('you action is here')
    return{
        type: act.GET_DATA_API
    }
}
