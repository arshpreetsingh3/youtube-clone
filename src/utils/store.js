import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import resultSlice from "./resultSlice";

const store = configureStore({

    reducer:{
        app : appSlice,
        search: searchSlice,
        chat: chatSlice,
        result: resultSlice,
    },

});

export default store;