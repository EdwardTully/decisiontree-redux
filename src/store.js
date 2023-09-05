import {configureStore} from '@reduxjs/toolkit'
import decABReducer from './views/start/decABSlice'
import decAReducer from './views/decA/decASlice'
import decBReducer from './views/level4/decBSlice'
import choiceA1ABReducer from './views/level2/choiceA1ABSlice'

const store = configureStore({
    reducer: {
        optionAB: decABReducer,
        optionA: decAReducer,
        optionB: decBReducer,
        choiceAB: choiceA1ABReducer,
    }
})


export default store