import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../utils/Api";
export const AddTour = createAsyncThunk(
  "tour/add",
  async ({ rModel, navigate, toast }, { rejectWithValue }) => {
    try {
      const res = await Api.post("tour", rModel);
      toast.success("Successfully Added Tour");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      return res.data;
    } catch (err) {
      console.log(err);
      toast.error("Something will be Wrong");
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const getTour = createAsyncThunk(
  "tour/getTour",
  async (_, { rejectWithValue }) => {
    try {
      const res = await Api.get("tour");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const getSingleTour = createAsyncThunk(
  "tour/getSingleTour",
  async (id, { rejectWithValue }) => {
    console.log("id---->", id);
    try {
      const res = await Api.get(`tour/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getToursByUser = createAsyncThunk(
  "tour/getToursByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await Api.get(`tour/usertour/${userId}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const deleteTour = createAsyncThunk(
  "tour/deleteTour",
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      const res = await Api.delete(`tour/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const UpdateTour = createAsyncThunk(
  "tour/updateTour",
  async ({ id, rModel, navigate, toast }, { rejectWithValue }) => {
    try {
      const res = await Api.patch(`tour/${id}`, rModel);
      toast.success("Update Successfully");
      setTimeout(() => {
        navigate("/");
      }, 1000);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const searchTour = createAsyncThunk(
  "tour/searchTour",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const res = await Api.get(`tour/search?searchQuery=${searchQuery}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const searchTourByTag = createAsyncThunk(
  "tour/searchTourByTag",
  async (tag, { rejectWithValue }) => {
    try {
      const res = await Api.get(`tour/tag/${tag}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const getTags = createAsyncThunk(
  "tour/getTags",
  async (_, { rejectWithValue }) => {
    try {
      const res = await Api.get("tour/alltags");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const getPostByCategory = createAsyncThunk(
  "tour/getPostByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const res = await Api.get(`tour/category/${category}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const getReletedTours = createAsyncThunk(
  "tour/getReletedTours",
  async (rModel, { rejectWithValue }) => {
    console.log("rModel=====================>", rModel);
    try {
      const res = await Api.post("tour/reletedtours", rModel);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const likeTour = createAsyncThunk(
  "tour/likeTour",
  async (id, { rejectWithValue }) => {
    try {
      const res = await Api.patch(`tour/like/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
const TourSlice = createSlice({
  name: "tour",
  initialState: {
    error: "",
    tourList: [],
    tagList: [],
    reletedTourList: [],
    PostByCategory: [],
    tour: "",
    tourListByUser: [],
    loading: false,
  },
  extraReducers: {
    [AddTour.pending]: (state, action) => {
      state.loading = true;
    },
    [AddTour.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [AddTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getTour.pending]: (state, action) => {
      state.loading = true;
    },
    [getTour.fulfilled]: (state, action) => {
      state.loading = false;
      state.tourList = action.payload;
    },
    [getTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getSingleTour.pending]: (state, action) => {
      state.loading = true;
    },
    [getSingleTour.fulfilled]: (state, action) => {
      state.loading = false;
      state.tour = action.payload;
    },
    [getSingleTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getToursByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getToursByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.tourListByUser = action.payload;
    },
    [getToursByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteTour.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteTour.fulfilled]: (state, action) => {
      state.loading = false;
      const id = action.meta.arg;
      state.tourListByUser = state.tourListByUser.filter(
        (item) => item._id !== id
      );
      state.tourList = state.tourList.filter((item) => item._id !== id);
    },
    [deleteTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UpdateTour.pending]: (state, action) => {
      state.loading = true;
    },
    [UpdateTour.fulfilled]: (state, action) => {
      state.loading = false;
      const id = action.meta.arg;
      state.tourListByUser = state.tourListByUser.map((item) =>
        item._id === id ? action.payload : item
      );
      state.tourList = state.tourList.map((item) =>
        item._id === id ? action.payload : item
      );
    },
    [UpdateTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [searchTour.pending]: (state, action) => {
      state.loading = true;
    },
    [searchTour.fulfilled]: (state, action) => {
      state.loading = false;
      state.tourList = action.payload;
    },
    [searchTour.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [searchTourByTag.pending]: (state, action) => {
      state.loading = true;
    },
    [searchTourByTag.fulfilled]: (state, action) => {
      state.loading = false;
      state.tourList = action.payload;
    },
    [searchTourByTag.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getTags.pending]: (state, action) => {
      state.loading = true;
    },
    [getTags.fulfilled]: (state, action) => {
      state.loading = false;
      state.tagList = action.payload;
    },
    [getTags.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getPostByCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [getPostByCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.PostByCategory = action.payload;
    },
    [getPostByCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getReletedTours.pending]: (state, action) => {
      state.loading = true;
    },
    [getReletedTours.fulfilled]: (state, action) => {
      state.loading = false;
      state.reletedTourList = action.payload;
    },
    [getReletedTours.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [likeTour.pending]: (state, action) => {
    },
    [likeTour.fulfilled]: (state, action) => {
      const id = action.meta.arg;
      state.tourList = state.tourList.map((item) =>
        item._id === id ? action.payload : item
      );
    },
    [likeTour.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});
export default TourSlice.reducer;
