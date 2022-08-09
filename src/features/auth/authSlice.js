import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoggedIn: false,
    logging: false,
    currentUser : null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action){
            state.logging= true;
        },
        loginSuccess(state, action){
            state.isLoggedIn= true;

            state.logging= false;
            state.currentUser= action.payload;
        },

        loginFailed(state, action){
            state.logging= false;
        },
        logout(state){
            state.isLoggedIn= false;
            state.currentUser= null;
        },

    }
})
// actions
export const authActions= authSlice.actions;
// selector
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsLogging = (state) => state.auth.logging;
// reducer
const authReducer= authSlice.reducer;
 export default authReducer;
