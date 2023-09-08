import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    choice: ''
}

const levelFourSlice = createSlice({
    name: 'option4',
    initialState,
    reducers: {
        choice: (state, action)=>{
            state.choice = action.payload
        },
        
    }
})

export default levelFourSlice.reducer
export const {choice} = levelFourSlice.actions