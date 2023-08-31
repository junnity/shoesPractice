import {createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name : 'Kim', age : 20 },
    reducers : {
      changeName(state){
        state.name = 'Park'
      },
      plusAge(state){
        state.age = state.age + 1
      }
    }
})
export let {changeName, plusAge} = user.actions

export default user