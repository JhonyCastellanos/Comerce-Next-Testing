import React from "react";
import PostCard from "@/components/PostCard";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return data;
}

async function PostsPage() {
  const posts = await loadPosts();
  console.log(posts);
  return (
    <div>
      <h1 class="text-center text-3xl font-bold m-5">Posts</h1>

      <div class="mx-5">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
