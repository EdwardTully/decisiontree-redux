import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    choice: '',
}

const choiceA1ABSlice = createSlice({
    name: 'optionA1AB',
    initialState: initialState,
    reducers: {
        choiceA1AB: (state, action)=>{
            state.choice = action.payload
        },
       
}})

export default choiceA1ABSlice.reducer
export const {choiceA1AB} = choiceA1ABSlice.actions