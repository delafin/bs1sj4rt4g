import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { variableApi } from './currency';
import { apiApilayer } from './converter';
import { createWrapper } from 'next-redux-wrapper'; // SSR: HYDRATE

const allReducers = combineReducers({
    [variableApi.reducerPath]: variableApi.reducer,
    [apiApilayer.reducerPath]: apiApilayer.reducer,
})

// const mainReducer: typeof allReducers = (state, action) => {
//     if (action.type === HYDRATE ) {
//         const nextState = {
//             ...state,
//             ...action.payload
//         };
//         return nextState;
//     } else {
//         return allReducers(state, action);
//     }
// };

const store = () => {
    return configureStore({
        devTools: process.env.NODE_ENV !== 'production',
        reducer: allReducers,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(variableApi.middleware).concat(apiApilayer.middleware)
    })
}

// Export types:
export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<typeof allReducers>
export type AppDispatch = AppStore['dispatch']
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

// SSR
export const wrapper = createWrapper<AppStore>(store);