import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    choice: ''
}

const levelThreeSlice = createSlice({
    name: 'option3',
    initialState,
    reducers: {
        choice: (state, action)=>{
            state.choice = action.payload
        },
        
    }
})

export default levelThreeSlice.reducer
export const {choice} = levelThreeSlice.actions