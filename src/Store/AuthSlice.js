import {createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../utils/Api";
export const login = createAsyncThunk("auth/login", async({rModel,navigate,toast},{ rejectWithValue })=>{
    try{
        const res = await Api.post("users/signin", rModel);
        toast.success("Successfully signed in");
          setTimeout(() => {
            navigate("/")
       }, 2000);
        return res.data
    }catch(err){
        console.log(err);
     return rejectWithValue(err.response.data.message)
    }
})
export const signup = createAsyncThunk("auth/register",async({rModel,navigate,toast},{rejectWithValue})=>{
    try{
        const res = await Api.post("users/signup", rModel);
        toast.success("Successfully sign Up");
          setTimeout(() => {
            navigate("/login")
       }, 2000);
        return res.data
    }catch(err){
        console.log(err);
        return rejectWithValue(err.response.data.message)
    }
})
export const googleSignin = createAsyncThunk("auth/googleSignin",async({result,navigate,toast},{rejectWithValue})=>{
    try{
        const res = await Api.post("users/googleSignin", result);
        toast.success("Google Sign in Successfully");
          setTimeout(() => {
            navigate("/")
       }, 2000);
        return res.data
    }catch(err){
        console.log(err);
        return rejectWithValue(err.response.data.message)
    }
})

const AuthSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        error:'',
        token:'',
        loading:false,
    },
    reducers: {
        addToken: (state, action) => {
          state.token = localStorage.getItem("token");
        },
        logout: (state, action) => {
          state.token = null;
          localStorage.removeItem("token");
          localStorage.removeItem("profile");
        },
      },
    extraReducers:{
        [login.pending]: (state,action)=>{
            state.loading = true
        },
        [login.fulfilled]: (state,action)=>{
            state.loading = false;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('profile', JSON.stringify(action.payload))
            state.user = action.payload
            state.token = action.payload.token
        },
        [login.rejected]:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        },
        [signup.pending]: (state,action)=>{
            state.loading = true
        },
        [signup.fulfilled]: (state,action)=>{
            state.loading = false;
            localStorage.setItem('token', action.payload.token);
            state.token = action.payload.token;
            state.user = action.payload
        },
        [signup.rejected]:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        },
        [googleSignin.pending]: (state,action)=>{
            state.loading = true
        },
        [googleSignin.fulfilled]: (state,action)=>{
            state.loading = false;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('profile',JSON.stringify(action.payload));
            state.token = action.payload.token;
            state.user = action.payload
        },
        [googleSignin.rejected]:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        }
    }
});
export const { addToken, logout } = AuthSlice.actions;
export default AuthSlice.reducer;