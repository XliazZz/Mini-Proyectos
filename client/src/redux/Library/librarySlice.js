import { createSlice } from "@reduxjs/toolkit";

const storedMyList = localStorage.getItem('myList');

const initialState = {
  myList: storedMyList ? JSON.parse(storedMyList) : [],
  selectedGenres: [],
};

export const librarySlice = createSlice({
  name: "library",
  initialState,

  reducers: {
    addBookInList: (state, action) => {
      state.myList = [...state.myList, action.payload];

      localStorage.setItem('myList', JSON.stringify(state.myList));
    },

    deleteBook: (state, action) => {
      state.myList = state.myList.filter((book) => book.ISBN !== action.payload);

      localStorage.setItem('myList', JSON.stringify(state.myList));
    },

    selectedGenre: (state, action) => {
      const genreToAddOrRemove = action.payload;
    
      if (state.selectedGenres.includes(genreToAddOrRemove)) {
        state.selectedGenres = state.selectedGenres.filter(genre => genre !== genreToAddOrRemove);
      } else {
        state.selectedGenres = [...state.selectedGenres, genreToAddOrRemove];
      }
    
      return state;
    }
  }
});

export const {
  addBookInList,
  deleteBook,
  selectedGenre,
} = librarySlice.actions;

export default librarySlice.reducer;