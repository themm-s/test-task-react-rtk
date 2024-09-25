import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload,
        completed: false,
        createdAt: new Date().toLocaleString()
      });
    },
    updateTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    toggleCompliteTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      if (index !== -1) state[index].completed = !state[index].completed;
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    }
  }
});

export const { addTask, removeTask, toggleCompliteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;