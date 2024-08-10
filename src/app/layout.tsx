import Navbar from "../components/Navbar";
import { CartProvider } from "./cart/CartContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="container mx-auto p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
