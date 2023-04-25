import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    value: 0,
};

// Create a slice of the store

const data = createSlice({
    name: 'data',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        }
    }
});

// Export the actions and the reducer
export const {increment} = data.actions;
export default data.reducer;

