import reducer from "./reducer";
import ACTIONS from "./action";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer,
});

export default store;