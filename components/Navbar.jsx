import Link from "next/link";
function Navbar() {
  return (
    <nav class="bg-slate-800 text-white p-5 flex justify-between items-center">
      <h1 class="text-3xl font-bold">Navigation</h1>
      <ul class="flex">
        <li class="mx-2">
          <Link href="/">Home</Link>
        </li>
        <li class="mx-2">
          <Link href="/shop">Shop</Link>
        </li>
        <li class="mx-2">
          <Link href="/posts">Posts</Link>
        </li>
        <li class="mx-2">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
