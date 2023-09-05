import {configureStore} from '@reduxjs/toolkit'
import decABReducer from './views/start/decABSlice'
import decAReducer from './views/decA/decASlice'
import decBReducer from './views/decB/decBSlice'

const store = configureStore({
    reducer: {
        optionAB: decABReducer,
        optionA: decAReducer,
        optionB: decBReducer,
    }
})


export default store