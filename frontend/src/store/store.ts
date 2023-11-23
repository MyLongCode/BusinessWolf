import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducers";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (gdm) => gdm().concat(thunk),
})