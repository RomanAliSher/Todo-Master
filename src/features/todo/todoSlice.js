import { createSlice, nanoid } from "@reduxjs/toolkit";
  
const initialState = {
    todos: [{ id: 1, text: 'Welcome to Todo Master! 🎉' }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload
            })
        }, 
        removetodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updatetodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
})

export const { addTodo, removetodo, updatetodo } = todoSlice.actions
export default todoSlice.reducer