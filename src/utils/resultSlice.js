import { createSlice } from "@reduxjs/toolkit"
const resultSlice = createSlice({
    name:'result',
    initialState:{
      isSearch: false,
      searchQuery : null,
    },
    reducers: {
        searchResults: (state,action) =>{
            state.isSearch = action.payload.isSearch;
            state.searchQuery = action.payload.searchQuery;
        }
    }
})
 

export const {searchResults} = resultSlice.actions;
export default resultSlice.reducer;