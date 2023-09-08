import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    choice: ''
}

const levelTwoSlice = createSlice({
    name: 'optionA',
    initialState,
    reducers: {
        choice2: (state, action)=>{
            state.choice = action.payload
        },
        
    }
})

export default levelTwoSlice.reducer
export const {choice2} = levelTwoSlice.actions