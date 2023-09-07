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
        // findIndex 도 있음
        let a = state.find(function(x){
          return x.id == action.payload
        })
        a.count = a.count+1
      },
      plusCart(state,action={}){
        let a = state.find(function(x){
          return x.id == action.payload.id
        })
        if(a==null){
          state.push(action.payload)
        }
        else{a.count = a.count+1}
        
      },
      minusCount(state,action){
        let a = state.find(function(x){
          return x.id == action.payload
        })
        if(a.count==1){
          return state.filter(function(x){ return x.id !== a.id })
        }
        else{
          a.count = a.count-1
        }
        
        // return을 사용하여 state를 변경할 수 있음
      }
    }
})
export let {plusCount,plusCart,minusCount} = cartData.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    cartData : cartData.reducer
  }
}) 