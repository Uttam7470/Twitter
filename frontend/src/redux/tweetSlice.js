import {createSlice} from '@reduxjs/toolkit'
const tweetSlice = createSlice({
    name : 'tweet',
    initialState : {
        tweets : null,
        refresh:false,
        isActive: true
    },
    reducers : {
        getAllTweet : (state, action) =>{
            state.tweets = action.payload
        },
        getRefresh : (state) => {
            state.refresh = !state.refresh
        },
        getIsActive : (state,action) =>{
            state.isActive = action.payload;
        }

    }
})


export const {getAllTweet, getRefresh, getIsActive} = tweetSlice.actions
export default tweetSlice.reducer ;


// import { createSlice } from '@reduxjs/toolkit';

// const tweetSlice = createSlice({
//   name: 'tweet',
//   initialState: {
//     tweets: [], // Initialize with an empty array for consistency
//     refresh: false,
//     isActive: true,
//   },
//   reducers: {
//     // Action to set all tweets
//     getAllTweet: (state, action) => {
//       state.tweets = action.payload;
//     },
//     // Action to toggle the refresh state
//     getRefresh: (state) => {
//       state.refresh = !state.refresh;
//     },
//     // Action to set the active state
//     getIsActive: (state, action) => {
//       state.isActive = action.payload;
//     },
//   },
// });

// // Export actions
// export const { getAllTweet, geteRefresh, getIsActive } = tweetSlice.actions;

// // Export the reducer
// export default tweetSlice.reducer;
