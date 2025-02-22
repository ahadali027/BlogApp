import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login:(state,action)=>{
      state = action.payload
    },
    logout:(state,action)=>{
      state = null
    },
    register:(state,action)=>{
      state = action.payload
    },

  },
});

export default authSlice.reducer;

export const {login, logout, register} = authSlice.actions;
