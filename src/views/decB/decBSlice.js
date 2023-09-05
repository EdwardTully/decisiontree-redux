import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    choiceB: ''
}

const decBSlice = createSlice({
    name: 'optionB',
    initialState,
    reducers: {
        choiceB: (state, action)=>{
            state.choiceB = action.payload
        },
       
    }
})

export default decBSlice.reducer
export const {choiceB} = decBSlice.actions