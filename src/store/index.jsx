import { configureStore } from '@reduxjs/toolkit';
import reducers from './store.jsx';

const store = configureStore({
    reducer: {
        // Add your reducers here
        reducer: reducers,
    },
});

export default store;