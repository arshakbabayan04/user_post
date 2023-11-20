import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const { data } = await axios.get("https://dummyjson.com/users");
  return data.users;
});

export const fetchUserPost = createAsyncThunk(
  "user/fetchUserPost",
  async (id: string) => {
    const { data } = await axios.get(`https://dummyjson.com/users/${id}/posts`);
    return data.posts;
  }
);
