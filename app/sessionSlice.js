import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    expire: "",
    user: {
      name: "notSignedIn",
      email: "notSignedIn",
      image: "notSignedIn",
    },
  },
};

export const sessionSlice = createSlice({
  name: "sessionSlice",
  initialState,
  reducers: {
    getSession: (state, action) => {
      state.value = action.payload;
    },
    removeSession: (state, action) => {
      state.value = {
        expire: "",
        user: {
          name: "notSignedIn",
          email: "notSignedIn",
          image: "notSignedIn",
        },
      };
    },
  },
});


export const {getSession, removeSession} = sessionSlice.actions;

export default sessionSlice.reducer;
