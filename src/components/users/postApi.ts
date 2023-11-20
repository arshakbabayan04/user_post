import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchPosts = createAsyncThunk(
  "user/fetchProducts",
  async (title: string) => {
    const { data } = await axios.get(
      `https://dummyjson.com/posts/search?q=${title}`
    );
    return data.posts;
  }
);
