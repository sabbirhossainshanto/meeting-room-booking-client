import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  searchTerm: string;
  filter: string;
  sort: string;
};
const initialState: TInitialState = {
  searchTerm: "",
  filter: "",
  sort: "",
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setFilter, setSearch, setSort } = roomSlice.actions;

export default roomSlice.reducer;
