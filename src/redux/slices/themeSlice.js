import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
  isSidebarOpen: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      if (state.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    }
  },
});

export const { toggleDarkMode, toggleSidebar, setSidebarOpen } = themeSlice.actions;
export default themeSlice.reducer;
