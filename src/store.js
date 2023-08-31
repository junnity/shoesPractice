import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'





let cartData = createSlice({
    name : 'cartData',
    initialState : 
        [
            {id : 0, name : 'White and Black', count : 2},
            {id : 2, name : 'Grey Yordan', count : 1}
        ] 
    ,
    reducers : {
      plusCount(state,action){
        state[action.payload].count = state[action.payload].count+1
      }
    }
})
export let {plusCount} = cartData.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    cartData : cartData.reducer
  }
}) 