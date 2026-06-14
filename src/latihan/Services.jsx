// Import data statis dari file postsData.js 
import { postsData } from "./postsData";

export const getPosts = () => {
  try {
    return postsData;
  } catch (error) {
    console.error("[Services] Gagal mengambil data statis:", error.message);
    return [];
  }
};