import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { viTri } from "../../services/positionsServices";
import { ContentGetViTriPhanTrang, ViTri } from "../../types/positionsTypes";

type InitialState = {
  isFetchContentGetViTriTimKiem: boolean;
  errContentGetViTriTimKiem?: any;
  contentGetViTriTimKiem?: ContentGetViTriPhanTrang<ViTri[]>;
};

const initialState: InitialState = {
  isFetchContentGetViTriTimKiem: false,
};

export const {
  reducer: getViTriPhanTrangTimKiemReducer,
  actions: getViTriPhanTrangTimKiemActions,
} = createSlice({
  name: "getViTriPhanTrangTimKiem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getViTriPhanTrangTimKiem.pending, (state, action) => {
        state.isFetchContentGetViTriTimKiem = true;
      })
      .addCase(getViTriPhanTrangTimKiem.fulfilled, (state, action) => {
        state.isFetchContentGetViTriTimKiem = false;
        state.contentGetViTriTimKiem = action.payload;
      })
      .addCase(getViTriPhanTrangTimKiem.rejected, (state, action) => {
        state.isFetchContentGetViTriTimKiem = false;
        state.errContentGetViTriTimKiem = action.payload;
      });
  },
});

export const getViTriPhanTrangTimKiem = createAsyncThunk(
  "getViTriPhanTrangTimKiem",
  async (data: string, { rejectWithValue }) => {
    try {
      const result = await viTri.getViTriPhanTrang(data);
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
