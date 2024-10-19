// // import {createSlice} from '@reduxjs/toolkit' 
// // import { getOtherUsers } from '../../../Backend/controllers/userController';

// // const userSlice = createSlice({
// //     name : "user",
// //     initialState :{
// //         user : null,
// //         otherUsers: null
// //     },
// //     reducers :{
// //         getUser : (state, action)=>{
// //             state.user = action.payload;
// //         },
// //         getOtherUsers : (state,action)=>{
// //             state.otherUsers = action.payload;
// //         }
// //     }
// // })

// // export const {getUser, getOtherUsers} = userSlice.actions;
// // export default userSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit'; 


// const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         user: null,
//         otherUsers: null,
//         profile: null
     
//     },
//     reducers: {
//         getUser: (state, action) => {
//             state.user = action.payload;
//         },
//         getOtherUsers: (state, action) => {   // Renamed to avoid conflict
//             state.otherUsers = action.payload;
//         },
//         getMyProfile : (state, action)=>{
//             state.profile = action.payload;
//         },
//         followingUpdate : (state, action) =>{
//             if(state.user.following.includes(action.payload)){
//                 state.user.following = state.user.following.filter((itemId)=>{
//                     return itemId !== action.payload
//                 })
//             }
//             else{
//                 state.user.following.push(action.payload);
//             }
//         }
//     }
// });

// export const { getUser, getOtherUsers , getMyProfile, followingUpdate} = userSlice.actions;  // Exporting the renamed action
// export default userSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,        // Current logged-in user
    otherUsers: [],    // List of other users (initialize with an empty array)
    profile: null,     // User's profile information
  },
  reducers: {
    // Action to set the current user
    getUser: (state, action) => {
      state.user = action.payload;
    },
    // Action to set the list of other users
    getOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    // Action to set the user's profile
    getMyProfile: (state, action) => {
      state.profile = action.payload;
    },
    // Action to update following status of the user
    followingUpdate: (state, action) => {
      if (state.user && state.user.following) { // Check if user is defined
        if (state.user.following.includes(action.payload)) {
          state.user.following = state.user.following.filter((itemId) => {
            return itemId !== action.payload; // Remove userId from following
          });
        } else {
          state.user.following.push(action.payload); // Add userId to following
        }
      }
    },
  },
});

// Exporting actions
export const { getUser, getOtherUsers, getMyProfile, followingUpdate } = userSlice.actions;

// Exporting the reducer
export default userSlice.reducer;
