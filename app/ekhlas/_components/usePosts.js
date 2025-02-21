// "use client"
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://api.vercel.app/blog");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const usePosts = () => {
  return useQuery(["posts"], fetchPosts);
};

export default usePosts;
