import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">Return</Link>
    </div>
  );
}

export default NotFound;
