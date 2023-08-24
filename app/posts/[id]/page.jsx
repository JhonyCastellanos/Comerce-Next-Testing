import React from "react";
import PostsPage from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function PostPage({ params }) {
  const post = await loadPost(params.id);

  return (
    <div class="mx-5">
      <h1 class="text-center text-3xl pt-5 pb-5">
        {post.id}. {post.title}
      </h1>
      <p class="pb-5">{post.body}</p>
      <hr class="pb-2" />
      <h3 class="absolute">More Posts</h3>
      <Suspense fallback={<div>Loading posts ...</div>}>
        <PostsPage />
      </Suspense>
    </div>
  );
}

export default PostPage;
