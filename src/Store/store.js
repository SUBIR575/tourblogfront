import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './AuthSlice'
import TourReducer from './TourSlice'
export default configureStore({
    reducer:{
        auth:AuthReducer,
        tour:TourReducer,
    }
})