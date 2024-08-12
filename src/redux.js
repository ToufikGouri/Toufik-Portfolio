import { configureStore, createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "themeSlice",
    initialState: {
        isDarkMode: true
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode
        },
    },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer


// STORE FOR REDUX
export const store = configureStore({
    reducer: themeSlice.reducer
})

