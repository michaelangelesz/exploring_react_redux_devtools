// import createSlice function from the @reduxjs/toolkit package
import { createSlice } from "@reduxjs/toolkit"

// create a slice of state and reducers (initializes the initialState object with an empty items array)
const initialState = {
  items: []
}

export const todoSlice = createSlice({ // createSlice function takes an object as an argument
  name: "todos", // sets the name property of the todoSlice object to "todos"
  initialState, // sets the initialState property of the todoSlice object to the initialState object
  reducers: { // starts the reducers property of the todoSlice object, which is an object containing functions that can modify the state
    addTodo: (state, action) => {
      return { items: [...state.items, action.payload] }
    }, // defines the addTodo function, which takes in a state object and an action object as arguments. The function returns a new state object with an updated items array that includes the payload property of the action object
    removeOne: (state, action) => {
      console.log(action)
      let array = [...state.items]
      let index = action.payload
      if (index !== -1) {
        array.splice(index, 1)
        return { items: array }
      }
    }, // defines the removeOne function, which takes in a state object and an action object as arguments. The function logs the action object to the console, creates a copy of the items array from the state object, and removes the item at the index specified by the payload property of the action object. The function then returns a new state object with the updated items array
    clearTodo: () => {
      return { items: [] }
    }, // defines the clearTodo function, which takes no arguments and returns a new state object with an empty items array
  },
})

// export the addTodo, removeOne, and clearTodo functions from the todoSlice object
export const { addTodo, removeOne, clearTodo } = todoSlice.actions

// export the reducer function from the todoSlice object as the default export
export default todoSlice.reducer
