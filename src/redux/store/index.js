import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reduxLogger from 'redux-logger';
import rootSaga from '../sagas'
import reducers from '../slices'

let sagaMiddleware = createSagaMiddleware();
// TODO: remove redux logger when development done
const middleware = [sagaMiddleware, reduxLogger];


const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            thunk: false,
            serializableCheck: false
        }).concat(middleware),
});

sagaMiddleware.run(rootSaga);

export default store;