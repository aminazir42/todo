import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, done: false });
    },
    removeTodo: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state[action.payload];
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
