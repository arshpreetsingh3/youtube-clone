import { createSlice } from "@reduxjs/toolkit"
const searchSlice = createSlice({
    name:'search',
    initialState:{

    },
    reducers: {
        cacheResults:(state,action) => {
            //state = {...action.payload, ...state}
            state = Object.assign(state, action.payload);
        },
        showResults:(state,action) => {
            state = Object.assign(state, action.payload);
        },
    },
})
export const {cacheResults, showResults} = searchSlice.actions;
export default searchSlice.reducer;
/** 
 * Cache:
 * 
 * if we store search results in array 
 * then time complexity to search in array = O(n)
 * 
 *  can use array.indexOf() == takes O(n)
 * 
 *  instead if we make object 
 * {
 *  i:
 *  ip:
 *  iph:
 *  iphone:
 * }
 * 
 *  Searching in object will take O(1)
 * 
 * can use new Map();
 * 
 *  even more optimized
 * 
 * 
 * LRU Cache 
 * 
 * Least Recently Used
 * Can restirct cace size to store only 100 keys 
 * if keys are over 100 start removing keys from the top 
 * 
 * 
 * 
 * 
 * 
 */