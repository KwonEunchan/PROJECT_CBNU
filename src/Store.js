import { configureStore, createSlice } from '@reduxjs/toolkit'


let view = createSlice({
  name : 'view',
  initialState : 'main',
  reducer:{
    setView(state,target){
      return target
    }
  }
})

export default configureStore({  
  reducer : {
    view : view.reducer
  }
}) 


export let { setView } = view.actions 