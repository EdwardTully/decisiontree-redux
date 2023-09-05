import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    choice: '',
}

const choiceA1ABSlice = createSlice({
    name: 'optionA1AB',
    initialState: initialState,
    reducers: {
        choiceAB: (state, action)=>{
            state.choice = action.payload
        },
       
}})

export default choiceA1ABSlice.reducer
export const {choiceAB} = choiceA1ABSlice.actions