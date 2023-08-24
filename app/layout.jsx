import Navbar from "@/components/Navbar";
import { Lato } from "next/font/google";
import "./global.css";

export const metadata = {
  title: "Dron Shop",
  description: "This is a shop for drones, using Next.js",
  keywords: "Shop, Dron, Next",
};

const lato = Lato({
  weight: ["300", "400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className} class="bg-slate-700">
        <Navbar />
        <div class="mx-20 mt-5 h-auto text-white bg-slate-600">{children}</div>
      </body>
    </html>
  );
}
