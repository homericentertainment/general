import { createSlice } from "@reduxjs/toolkit"

export const generalSlice = createSlice({
    name: 'general',
    initialState: {
        popup: '',
        upperPopup: '',
    },
    reducers: {
        setPopup: (state, action) => {
            state.popup = action.payload
        },
        setUpperPopup: (state, action) => {
            state.upperPopup = action.payload
        },

    }
})

export const {
    setPopup,
    setUpperPopup,
} = generalSlice.actions

export default generalSlice.reducer
