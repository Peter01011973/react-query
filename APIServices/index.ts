import axios from "axios";
import { Post } from "../models/post";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPostsPage = async (
  pageParam = 1,
  filterParams = {},
  options = {},
) => {
  try {
    const filterQueryString = Object.entries(filterParams)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const response = await api.get<Post[]>(
      `/posts?_page=${pageParam}&_limit=7${
        filterQueryString ? "&" + filterQueryString : ""
      }`,
      options,
    );
    return response.data;
  } catch (error) {
    throw new Error("Fail to fetch posts");
  }
};
