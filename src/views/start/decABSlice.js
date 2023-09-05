import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    choice: 'default',
}

const decABSlice = createSlice({
    name: 'optionAB',
    initialState: initialState,
    reducers: {
        choiceAB: (state, action)=>{
            state.choice = action.payload
        },
       
}})

export default decABSlice.reducer
export const {choiceAB} = decABSlice.actions