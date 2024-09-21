import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Space } from "../types/Space";

export const fetchSpaces = createAsyncThunk("spaces/fetchSpaces", async () => {
  const response = await axios.get("YOUR_GITHUB_RAW_DATA_URL");
  return response.data as Space[];
});

const spacesSlice = createSlice({
  name: "spaces",
  initialState: { spaces: [] as Space[], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpaces.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSpaces.fulfilled, (state, action) => {
        state.spaces = action.payload;
        state.loading = false;
      });
  },
});

export default spacesSlice.reducer;
