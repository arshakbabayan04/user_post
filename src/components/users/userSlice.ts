import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Post, Product, User } from "../types";
import { fetchPosts } from "./postApi";
import { fetchUserPost, fetchUsers } from "./userApi";

interface userState {
  users: User[];
  search: Post[];
  posts: Post[];
  products: Product[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: userState = {
  users: [],
  search: [],
  posts: [],
  products: [],
  loading: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((el) => el.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.search = action.payload;
      })
      .addCase(fetchUserPost.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
  },
});

export default userSlice.reducer;

export const { deletePost } = userSlice.actions;
