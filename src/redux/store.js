// store.js
import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./features/blogs/blogsApi"; // Đảm bảo đường dẫn đúng

const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
});

export default store;
