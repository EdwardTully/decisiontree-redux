import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    choiceA: 'option?'
}

const decASlice = createSlice({
    name: 'optionA',
    initialState,
    reducers: {
        choiceA: (state, action)=>{
            state.choiceA = action.payload
        },
        
    }
})

export default decASlice.reducer
export const {choiceA} = decASlice.actions