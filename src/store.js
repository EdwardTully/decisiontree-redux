import {configureStore} from '@reduxjs/toolkit'
import decABReducer from './views/start/decABSlice'
import levelTwoReducer from './views/level2/levelTwoSlice'
import levelThreeReducer from './views/level3/levelThreeSlice'
import levelFourReducer from './views/level4/levelFourSlice'

const store = configureStore({
    reducer: {
        optionAB: decABReducer,
        optionTwo: levelTwoReducer,
        optionThree: levelThreeReducer,
        optionFour: levelFourReducer,
    }
})


export default store