import { configureStore, combineReducers } from '@reduxjs/toolkit'; // Action
import { variableApi } from './currency';
// import reducerOne from '../SliceOne'; // rename from `export default SliceOne;`
import { HYDRATE, createWrapper } from 'next-redux-wrapper'; // for SSR

const allReducers = combineReducers({
    // reducerOne,
    [variableApi.reducerPath]: variableApi.reducer,
})

// const mainReducer: typeof allReducers = (state, action) => {
//     if (action.type === HYDRATE ) {
//         const nextState = {
//             ...state,
//             ...action.payload, // for SSR change this line in each case like:
//             // counter: {
//             // 	count: state.counter.count + action.payload.counter.count
//             // 	values: [...state.counter.values, ...action.payload.counter.values]
//             // }
//         };
//         return nextState;
//     } else {
//         return allReducers(state, action);
//     }
// };

const store = () => {
    return configureStore({
        devTools: process.env.NODE_ENV !== 'production',
        reducer: allReducers, // allReducers, reducerOne, mainReducer
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(variableApi.middleware) // rdxtqCreateApiU
    })
}

// Export types:
export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<typeof allReducers>
export type AppDispatch = AppStore['dispatch']
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

// SSR, Not Always Need
// eslint-disable-next-line
export const wrapper = createWrapper<AppStore>(store); // for SSR