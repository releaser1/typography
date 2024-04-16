import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [1, 2, 3, 5],
    count: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    }
})

export default cartSlice.reducer;