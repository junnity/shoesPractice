import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './../src/store/userSlice.js'





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
        let a = state.find(function(x){
          return x.id == action.payload
        })
        a.count = a.count+1
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