"use client";

import React from "react";
import Link from "next/link";

function PostCard({ post }) {
  return (
    <div class="mb-10">
      <hr />
      <Link href={`/posts/${post.id}`}>
        <h3 class="text-2xl mb-2">
          {post.id}. {post.title}
        </h3>
      </Link>
      <p> {post.body}</p>
      <button
        onClick={() => {
          alert("Like Post");
        }}
      >
        Like
      </button>
    </div>
  );
}

export default PostCard;
