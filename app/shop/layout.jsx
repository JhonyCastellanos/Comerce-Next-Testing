import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Shop",
};

function ShopLayout({ children }) {
  return (
    <>
      {children}
      <nav>
        <h1 class="text-2xl ml-5">Categories</h1>
        <ul class="ml-14 mt-4">
          <li>
            <Link href="/shop/categories/engines">. Engines</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default ShopLayout;
